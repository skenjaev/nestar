import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
<<<<<<< HEAD
=======
import { stringify } from 'querystring';
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private readonly logger: Logger = new Logger();

<<<<<<< HEAD
	public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
=======
	public intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
		const recordTime = Date.now();
		const requestType = context.getType<GqlContextType>();

		if (requestType === 'http') {
			/* Develop if needed! */
		} else if (requestType === 'graphql') {
			/* (1) Print Request */
			const gqlContext = GqlExecutionContext.create(context);
			this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'REQUEST');

<<<<<<< HEAD
			/* (2) Errors handling vi GraphQL  */

			/* (3) No Errors giving Response below */
			return next.handle().pipe(
				tap((context) => {
					const responseTime = Date.now() - recordTime;
					this.logger.log(`${this.stringify(context)} - ${responseTime}ms \n\n`, 'RESPONSE');
				}),
			);
		}
=======
			/* (2) Errors handling via GraphQL */
			/* (2) No Errors, giving Response below */
			return next.handle().pipe(
				tap((context) => {
					const responsTime = Date.now() - recordTime;
					this.logger.log(`${this.stringify(context)} - ${responsTime}ms \n\n`, 'RESPONSE');
				}),
			);
		}
		return next.handle();
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
	}

	private stringify(context: ExecutionContext): string {
		return JSON.stringify(context).slice(0, 75);
	}
}
