import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { View } from '../../libs/dto/view/view';
<<<<<<< HEAD
import { ViewInput } from '../../libs/dto/view/view.input';
=======
import { ViewInput } from '../../libs/dto//view/view.input';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { T } from '../../libs/types/common';

@Injectable()
export class ViewService {
<<<<<<< HEAD
	constructor(@InjectModel('view') private readonly viewModel: Model<View>) {}

	public async recordView(input: ViewInput): Promise<View | null> {
		const viewExist = await this.checkViewExistence(input);
		if (!viewExist) {
			console.log('-New View Insert -');
			return await this.viewModel.create(input);
		} else return null;
	}

	public async checkViewExistence(input: ViewInput): Promise<View> {
		const { memberId, viewRefId } = input;
		const search: T = { memberId: memberId, viewRefId: viewRefId };
		return await this.viewModel.findOne(search).exec();
	}
=======
  constructor(@InjectModel('View') private readonly viewModel: Model<View>) {}

  public async recordView(input: ViewInput): Promise<View | null> {
    console.log('viewInput:', input);
    const viewExist = await this.checkViewExistense(input);
    console.log("viewExist>>>>", viewExist);
    if (!viewExist) {
      console.log('- New View Insert -');
      return await this.viewModel.create(input);
    } else return null;
  }

  public async checkViewExistense(input: ViewInput): Promise<View | null> {
    const { memberId, viewRefId, viewGroup } = input;
    const search: T = { memberId: memberId, viewRefId: viewRefId, viewGroup: viewGroup };
    return await this.viewModel.findOne(search).exec();
  }
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
}
