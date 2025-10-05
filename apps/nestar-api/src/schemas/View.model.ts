import { Schema } from 'mongoose';
import { ViewGroup } from '../libs/enums/view.enum';

const ViewSchema = new Schema(
<<<<<<< HEAD
	{
		viewGroup: {
			type: String,
			enum: ViewGroup,
			required: true,
		},

		viewRefId: {
			type: Schema.Types.ObjectId,
			required: true,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},
	},
	{ timestamps: true, collection: 'views' },
=======
  {
    viewGroup: {
      type: String,
      enum: ViewGroup,
      required: true,
    },

    viewRefId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    memberId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Member',
    },
  },
  { timestamps: true, collection: 'views' },
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
);

ViewSchema.index({ memberId: 1, viewRefId: 1 }, { unique: true });

export default ViewSchema;
