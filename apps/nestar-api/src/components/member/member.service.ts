import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Member, Members } from '../../libs/dto/member/member';
<<<<<<< HEAD
import { LoginInput, MemberInput, MembersInquiry } from '../../libs/dto/member/member.input';
=======
import { AgentsInquiry, LoginInput, MemberInput, MembersInquiry } from '../../libs/dto/member/member.input';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { MemberStatus, MemberType } from '../../libs/enums/member.enum';
import { Direction, Message } from '../../libs/enums/common.enum';
import { AuthService } from '../auth/auth.service';
import { MemberUpdate } from '../../libs/dto/member/member.update';
import { StatisticModifier, T } from '../../libs/types/common';
import { ViewService } from '../view/view.service';
import { ViewGroup } from '../../libs/enums/view.enum';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<Member>,
    private authService: AuthService,
    private viewService: ViewService,
  ) {}

  public async signup(input: MemberInput): Promise<Member> {
    // Hash Password
    input.memberPassword = await this.authService.hashPassword(input.memberPassword);
    try {
      const result = await this.memberModel.create(input);

      // Authentication via TOKEN
      result.accessToken = await this.authService.createToken(result);
      return result;
<<<<<<< HEAD
    } catch (err: any) {
=======
    } catch (err) {
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
      console.log('Error, Service.model:', err.message);
      throw new BadRequestException(Message.USED_MEMBER_NICK_OR_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
<<<<<<< HEAD
    const { memberNick } = input;
    const response: Member | null = await this.memberModel
      .findOne({ memberNick })
=======
    const { memberNick, memberPassword } = input;
    const response: Member | null = await this.memberModel
      .findOne({ memberNick: memberNick })
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
      .select('+memberPassword')
      .exec();

    if (!response || response.memberStatus === MemberStatus.DELETE) {
      throw new InternalServerErrorException(Message.NO_MEMBER_NICK);
    } else if (response.memberStatus === MemberStatus.BLOCK) {
      throw new InternalServerErrorException(Message.BLOCKED_USER);
    }

    // compare Password
<<<<<<< HEAD
    const isMatch = await this.authService.comparePassword(input.memberPassword, response.memberPassword);
    if (!isMatch) throw new InternalServerErrorException(Message.WRONG_PASSWORD);

    response.accessToken = await this.authService.createToken(response);
=======
    const isMatch = await this.authService.comparePasswords(input.memberPassword, response.memberPassword);
    if (!isMatch) throw new InternalServerErrorException(Message.WRONG_PASSWORD);
    response.accessToken = await this.authService.createToken(response);

>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
    return response;
  }

  public async updateMember(memberId: ObjectId, input: MemberUpdate): Promise<Member> {
    const result: Member | null = await this.memberModel
      .findOneAndUpdate(
        {
          _id: memberId,
          memberStatus: MemberStatus.ACTIVE,
        },
        input,
        { new: true },
      )
      .exec();
    if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);

    result.accessToken = await this.authService.createToken(result);
    return result;
  }

  public async getMember(memberId: ObjectId | null, targetId: ObjectId): Promise<Member> {
    const search: T = {
      _id: targetId,
      memberStatus: {
        $in: [MemberStatus.ACTIVE, MemberStatus.BLOCK],
      },
    };
    const targetMember = await this.memberModel.findOne(search).lean().exec();
    if (!targetMember) throw new InternalServerErrorException(Message.NO_DATA_FOUND);

    if (memberId) {
      // record view
<<<<<<< HEAD
      const viewInput = { memberId, viewRefId: targetId, viewGroup: ViewGroup.MEMBER };
=======
      const viewInput = { memberId: memberId, viewRefId: targetId, viewGroup: ViewGroup.MEMBER };
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
      const newView = await this.viewService.recordView(viewInput);
      if (newView) {
        // increase memberview
        await this.memberModel.findOneAndUpdate(search, { $inc: { memberViews: 1 } }, { new: true }).exec();
        targetMember.memberViews++;
      }
    }

    return targetMember;
  }

<<<<<<< HEAD
  public async getAgents(memberId: ObjectId, input: MembersInquiry): Promise<Members> {
    const { text } = input.search;
    const match: T = { memberType: MemberType.AGENT, memberStatus: MemberStatus.ACTIVE };

    // Default sort key should match your schema; commonly 'createdAt'
    const sortKey = input?.sort ?? 'createdAt';
    const sort: T = { [sortKey]: input?.direction ?? Direction.DESC };
=======
  public async getAgents(memberId: ObjectId, input: AgentsInquiry): Promise<Members> {
    const { text } = input.search;
    const match: T = { memberType: MemberType.AGENT, memberStatus: MemberStatus.ACTIVE };
    const sort: T = { [input?.sort ?? 'CreatedAt']: input?.direction ?? Direction.DESC };
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)

    if (text) match.memberNick = { $regex: new RegExp(text, 'i') };
    console.log('MATCH>>>', match);

    const result = await this.memberModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        {
          $facet: {
<<<<<<< HEAD
            list: [{ $skip: (input.page - 1) * input.limit }, { $limit: input.limit }],
=======
            list: [{ $skip: (input.page - 1) * input.limit }, { $limit: input.limit }], // only wanted Agents
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
            metaCounter: [{ $count: 'total' }],
          },
        },
      ])
      .exec();
<<<<<<< HEAD

=======
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
    if (!result.length) throw new InternalServerErrorException(Message.NO_DATA_FOUND);
    return result[0];
  }

  public async getAllMembersByAdmin(input: MembersInquiry): Promise<Members> {
    const { memberStatus, memberType, text } = input.search;
    const match: T = {};
<<<<<<< HEAD
    const sortKey = input?.sort ?? 'createdAt';
    const sort: T = { [sortKey]: input?.direction ?? Direction.DESC };
=======
    const sort: T = { [input?.sort ?? 'CreatedAt']: input?.direction ?? Direction.DESC };
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)

    if (memberStatus) match.memberStatus = memberStatus;
    if (memberType) match.memberType = memberType;
    if (text) match.memberNick = { $regex: new RegExp(text, 'i') };
    console.log('MATCH>>>', match);

    const result = await this.memberModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        {
          $facet: {
<<<<<<< HEAD
            list: [{ $skip: (input.page - 1) * input.limit }, { $limit: input.limit }],
=======
            list: [{ $skip: (input.page - 1) * input.limit }, { $limit: input.limit }], // All users
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
            metaCounter: [{ $count: 'total' }],
          },
        },
      ])
      .exec();
<<<<<<< HEAD

=======
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
    if (!result.length) throw new InternalServerErrorException(Message.NO_DATA_FOUND);
    return result[0];
  }

  public async updateMemberByAdmin(input: MemberUpdate): Promise<Member> {
    const result: Member | null = await this.memberModel
      .findOneAndUpdate({ _id: input._id }, input, { new: true })
      .exec();
    if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);
    return result;
  }

  public async memberStatsEditor(input: StatisticModifier): Promise<Member | null> {
    console.log('executed');
    const { _id, targetKey, modifier } = input;
    return await this.memberModel
<<<<<<< HEAD
      .findOneAndUpdate(
        _id,
        {
          $inc: { [targetKey]: modifier },
        },
        { new: true },
      )
      .exec();
  }
}


=======
    .findOneAndUpdate(
      _id, 
      { 
        $inc: { [targetKey]: modifier }, 
      }, 
      { new: true },
    )
    .exec();
  }
}
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
