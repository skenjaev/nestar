<<<<<<< HEAD
// apps/nestar-api/src/libs/dto/member/member.input.ts

import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { MemberAuthType, MemberStatus, MemberType } from '../../enums/member.enum';
import { availableMembertSorts, availablePropertySorts } from '../../config';
=======
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { MemberAuthType, MemberStatus, MemberType } from '../../enums/member.enum';
import { availableAgentSorts, availableMemberSorts } from '../../config';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { Direction } from '../../enums/common.enum';

@InputType()
export class MemberInput {
  @IsNotEmpty()
  @Length(3, 12)
  @Field(() => String)
  memberNick: string;

  @IsNotEmpty()
  @Length(5, 12)
  @Field(() => String)
  memberPassword: string;

  @IsNotEmpty()
  @Field(() => String)
  memberPhone: string;

  @IsOptional()
  @Field(() => MemberType, { nullable: true })
  memberType?: MemberType;

  @IsOptional()
  @Field(() => MemberAuthType, { nullable: true })
<<<<<<< HEAD
  memberAuthType?: MemberAuthType;
=======
  MemberAuthType?: MemberAuthType;
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
}

@InputType()
export class LoginInput {
  @IsNotEmpty()
  @Length(3, 12)
  @Field(() => String)
  memberNick: string;

  @IsNotEmpty()
<<<<<<< HEAD
  @Length(5, 12)
=======
  @Length(3, 12)
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
  @Field(() => String)
  memberPassword: string;
}

<<<<<<< HEAD
/** Qidiruv inputlari **/
=======

>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
@InputType()
class AISearch {
  @IsOptional()
  @Field(() => String, { nullable: true })
  text?: string;
}

<<<<<<< HEAD
/** AGENT PROPERTIES (ko‘chmas mulk) ro‘yxatini olish uchun so‘rov inputi **/
@InputType()
export class AgentPropertiesInquiry {
=======
@InputType()
export class AgentsInquiry {
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
  @IsNotEmpty()
  @Min(1)
  @Field(() => Int)
  page: number;

  @IsNotEmpty()
  @Min(1)
  @Field(() => Int)
  limit: number;

<<<<<<< HEAD
  // ⚠️ Ko'chmas mulk uchun sortlar: availablePropertySorts
  @IsOptional()
  @IsIn(availablePropertySorts)
=======
  @IsOptional()
  @IsIn(availableAgentSorts)
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
  @Field(() => String, { nullable: true })
  sort?: string;

  @IsOptional()
  @Field(() => Direction, { nullable: true })
  direction?: Direction;

  @IsNotEmpty()
  @Field(() => AISearch)
  search: AISearch;
}

<<<<<<< HEAD
/** Members (foydalanuvchilar) qidiruvi uchun ichki search **/
@InputType()
class MISearch {
=======

@InputType()
class MISearch {

>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
  @IsOptional()
  @Field(() => MemberStatus, { nullable: true })
  memberStatus?: MemberStatus;

  @IsOptional()
  @Field(() => MemberType, { nullable: true })
  memberType?: MemberType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  text?: string;
}

<<<<<<< HEAD
/** MEMBERS ro‘yxatini olish uchun so‘rov inputi **/
=======
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
@InputType()
export class MembersInquiry {
  @IsNotEmpty()
  @Min(1)
  @Field(() => Int)
  page: number;

  @IsNotEmpty()
  @Min(1)
  @Field(() => Int)
  limit: number;

<<<<<<< HEAD
  // ⚠️ A’zolar uchun sortlar: availableMembertSorts (config.ts dagi nomiga aynan mos)
  @IsOptional()
  @IsIn(availableMembertSorts)
=======
  @IsOptional()
  @IsIn(availableMemberSorts)
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
  @Field(() => String, { nullable: true })
  sort?: string;

  @IsOptional()
  @Field(() => Direction, { nullable: true })
  direction?: Direction;

  @IsNotEmpty()
  @Field(() => MISearch)
  search: MISearch;
}
