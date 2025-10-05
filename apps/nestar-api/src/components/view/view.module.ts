import { Module } from '@nestjs/common';
import { ViewService } from './view.service';
<<<<<<< HEAD
=======
import { Mongoose } from 'mongoose';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { MongooseModule } from '@nestjs/mongoose';
import ViewSchema from '../../schemas/View.model';

@Module({
<<<<<<< HEAD
	imports: [MongooseModule.forFeature([{ name: 'view', schema: ViewSchema }])],
	providers: [ViewService],
	exports: [ViewService],
=======
  imports: [MongooseModule.forFeature([{ name: 'View', schema: ViewSchema }])],
  providers: [ViewService],
  exports: [ViewService],
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
})
export class ViewModule {}
