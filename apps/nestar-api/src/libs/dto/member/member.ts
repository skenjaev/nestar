import { Field, Int, ObjectType } from '@nestjs/graphql';
<<<<<<< HEAD
import { ObjectId } from 'mongoose';
=======
import type { ObjectId } from 'mongoose';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { MemberAuthType, MemberStatus, MemberType } from '../../enums/member.enum';

@ObjectType()
export class Member {
	@Field(() => String)
<<<<<<< HEAD
	_id: ObjectId;
=======
	_id?: ObjectId;
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)

	@Field(() => MemberType)
	memberType: MemberType;

	@Field(() => MemberStatus)
	memberStatus: MemberStatus;

	@Field(() => MemberAuthType)
	memberAuthType: MemberAuthType;

	@Field(() => String)
	memberPhone: string;

	@Field(() => String)
	memberNick: string;

<<<<<<< HEAD
	memberPassword?: string;
=======
	memberPassword: string;
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)

	@Field(() => String, { nullable: true })
	memberFullName?: string;

	@Field(() => String)
	memberImage: string;

	@Field(() => String, { nullable: true })
	memberAddress?: string;

	@Field(() => String, { nullable: true })
	memberDesc?: string;

	@Field(() => Int)
	memberProperties: number;

	@Field(() => Int)
	memberArticles: number;

	@Field(() => Int)
	memberFollowers: number;

	@Field(() => Int)
	memberFollowings: number;

	@Field(() => Int)
	memberPoints: number;

	@Field(() => Int)
	memberLikes: number;

	@Field(() => Int)
	memberViews: number;

	@Field(() => Int)
	memberComments: number;

	@Field(() => Int)
	memberRank: number;

	@Field(() => Int)
	memberWarnings: number;

	@Field(() => Int)
	memberBlocks: number;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date)
<<<<<<< HEAD
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
=======
	createdAt?: Date;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date;
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)

	@Field(() => String, { nullable: true })
	accessToken?: string;
}

@ObjectType()
export class TotalCounter {
	@Field(() => Int, { nullable: true })
	total: number;
}

<<<<<<< HEAD
=======

>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
@ObjectType()
export class Members {
	@Field(() => [Member])
	list: Member[];

	@Field(() => [TotalCounter], { nullable: true })
<<<<<<< HEAD
	metaCounter: TotalCounter[];
}
=======
	metaCounter: TotalCounter[]
}
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
