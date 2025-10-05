import { Module } from '@nestjs/common';
import { PropertyResolver } from './property.resolver';
import { PropertyService } from './property.service';
<<<<<<< HEAD
import PropertySchema from '../../schemas/Property.model';
import { MongooseModule } from '@nestjs/mongoose';
=======
import { MongooseModule } from '@nestjs/mongoose';
import PropertySchema from '../../schemas/Property.model';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { MemberModule } from '../member/member.module';

@Module({
<<<<<<< HEAD
	imports: [
		MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]),
		AuthModule,
		ViewModule,
		MemberModule,
	],
	providers: [PropertyResolver, PropertyService],
=======
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Property',
        schema: PropertySchema,
      },
    ]),
    AuthModule,
    ViewModule,
    MemberModule,
  ],

  providers: [PropertyResolver, PropertyService],
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
})
export class PropertyModule {}
