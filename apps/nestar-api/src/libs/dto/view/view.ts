<<<<<<< HEAD
import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

=======
import { Field, Int, ObjectType } from '@nestjs/graphql';
import type { ObjectId } from 'mongoose';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { ViewGroup } from '../../enums/view.enum';

@ObjectType()
export class View {
<<<<<<< HEAD
	@Field(() => String)
	_id: ObjectId;

	@Field(() => ViewGroup)
	viewGroup: ViewGroup;

	@Field(() => String)
	viewRefId: ObjectId;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
=======
  @Field(() => String)
  _id: ObjectId;

  @Field(() => ViewGroup)
  viewGroup: ViewGroup;

  @Field(() => String)
  viewRefId: ObjectId;

  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
}
