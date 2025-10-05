import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Follower, Followers, Following, Followings } from '../../libs/dto/follow/follow';
import { MemberService } from '../member/member.service';
import { Direction, Message } from '../../libs/enums/common.enum';
import { T } from '../../libs/types/common';
import { lookupFollowerData, lookupFollowingData } from '../../libs/config';
import { FollowInquiry } from '../../libs/dto/follow/follow.input';

@Injectable()
export class FollowService {
  constructor(
    @InjectModel('Follow') private readonly followModel: Model<Follower | Following>,
    private readonly memberService: MemberService,
  ) {}

  public async subscribe(followerId: ObjectId, followingId: ObjectId): Promise<Follower> {
    // 1️⃣ O‘zi o‘zini follow qilmasligi kerak
    if (followerId.toString() === followingId.toString()) {
      throw new InternalServerErrorException(Message.SELF_SUBSCRIPTION_DENIED);
    }

    // 2️⃣ Target member mavjudligini tekshiramiz
    const targetMember = await this.memberService.getMember(null, followingId);
    if (!targetMember) {
      throw new InternalServerErrorException(Message.NO_DATA_FOUND);
    }

    // 3️⃣ Yangi subscriptionni ro‘yxatga olish
    const result = await this.registerSubscription(followerId, followingId);

    // 4️⃣ Statistikalarni yangilash
    await this.memberService.memberStatsEditor({
      _id: followerId,
      targetKey: 'memberFollowings',
      modifier: 1,
    });

    await this.memberService.memberStatsEditor({
      _id: followingId,
      targetKey: 'memberFollowers',
      modifier: 1,
    });

    return result;
  }

  private async registerSubscription(followerId: ObjectId, followingId: ObjectId): Promise<Follower> {
    try {
      return await this.followModel.create({
        followingId: followingId,
        followerId: followerId,
      });
    } catch (err) {
      console.log('Error, Service.model:', err.message);
      throw new BadRequestException(Message.CREATE_FAILED);
    }
  }

  public async unsubscribe(followerId: ObjectId, followingId: ObjectId): Promise<Follower> {
    // 1️⃣ Target member mavjudligini tekshiramiz
    const targetMember = await this.memberService.getMember(null, followingId);
    if (!targetMember) {
      throw new InternalServerErrorException(Message.NO_DATA_FOUND);
    }

    // 2️⃣ Follow hujjatini topib o'chiramiz
    const result = await this.followModel.findOneAndDelete({ followingId: followingId, followerId: followerId }).exec();

    if (!result) {
      throw new InternalServerErrorException(Message.NO_DATA_FOUND);
    }

    // 3️⃣ Statistikalardan -1 kamaytiramiz
    await this.memberService.memberStatsEditor({
      _id: followerId,
      targetKey: 'memberFollowings',
      modifier: -1,
    });

    await this.memberService.memberStatsEditor({
      _id: followingId,
      targetKey: 'memberFollowers',
      modifier: -1,
    });

    // 4️⃣ O'chirilgan follow hujjatini qaytaramiz
    return result;
  }

  public async getMemberFollowings(memberId: ObjectId, input: FollowInquiry): Promise<Followings> {
    const { page, limit, search } = input;

    // 1️⃣ followerId borligini tekshiramiz
    if (!search?.followerId) {
      throw new InternalServerErrorException(Message.BAD_REQUEST);
    }

    const match: T = { followerId: search.followerId };
    console.log('match:', match);

    // 2️⃣ Maʼlumotlarni olish uchun aggregation
    const result = await this.followModel
      .aggregate([
        { $match: match },
        { $sort: { createdAt: Direction.DESC } },
        {
          $facet: {
            list: [
              { $skip: (page - 1) * limit },
              { $limit: limit },
              // meLiked
              // meFollowed
              lookupFollowingData,
              { $unwind: '$followingData' },
            ],
            metaCounter: [{ $count: 'total' }],
          },
        },
      ])
      .exec();

    if (!result.length) {
      throw new InternalServerErrorException(Message.NO_DATA_FOUND);
    }

    return result[0];
  }

  public async getMemberFollowers(memberId: ObjectId, input: FollowInquiry): Promise<Followers> {
    const { page, limit, search } = input;
    if (!search?.followingId) throw new InternalServerErrorException(Message.BAD_REQUEST);

    const match: T = { followingId: search.followingId };
    console.log('match:', match);

    const result = await this.followModel
      .aggregate([
        { $match: match },
        { $sort: { createdAt: Direction.DESC } },
        {
          $facet: {
            list: [
              { $skip: (page - 1) * limit },
              { $limit: limit },
              // agar lookup ishlatayotgan bo‘lsang:
              lookupFollowerData,
              { $unwind: '$followerData' },
            ],
            metaCounter: [{ $count: 'total' }],
          },
        },
      ])
      .exec();

    if (!result.length) throw new InternalServerErrorException(Message.NO_DATA_FOUND);

    return result[0];
  }
}
