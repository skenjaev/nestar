import { Schema } from 'mongoose';

const FollowSchema = new Schema(
	{
		followingId: {
			type: Schema.Types.ObjectId,
			required: true,
		},

		followerId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
	},
<<<<<<< HEAD
	{ timestamps: true, collection: 'follows' },
=======
	{ timestamps: true },
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
);

FollowSchema.index({ followingId: 1, followerId: 1 }, { unique: true });

export default FollowSchema;
