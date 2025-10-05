import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { T } from './libs/types/common';
<<<<<<< HEAD

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot({
=======
import { ViewService } from './no-spec/components/view/view.service';

@Module({  // design pattern
	imports: [
		ConfigModule.forRoot(),    // en variables
		GraphQLModule.forRoot({    // call graphql
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
			driver: ApolloDriver,
			playground: true,
			uploads: false,
			autoSchemaFile: true,
			formatError: (error: T) => {
<<<<<<< HEAD
=======
				console.log('eror:', error);
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
				const graphQLFormattedError = {
					code: error?.extensions.code,
					message:
						error?.extensions?.exception?.response?.message || error?.extensions?.response?.message || error?.message,
				};
				console.log('GRAPHQL GLOBAL ERR:', graphQLFormattedError);
				return graphQLFormattedError;
			},
		}),
<<<<<<< HEAD
		ComponentsModule, // HTTP
		DatabaseModule, // TCP
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
=======
		ComponentsModule,
		DatabaseModule,
	],
	controllers: [AppController],
	providers: [AppService, AppResolver, ViewService],
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
})
export class AppModule {}
