import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
	@Query(() => String)
	public sayHello(): string {
<<<<<<< HEAD
		return 'GraphQL API Server';
=======
		return 'GraphQl API Server';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
	}
}
