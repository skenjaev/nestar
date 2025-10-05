import { NestFactory } from '@nestjs/core';
import { NestarBatchModule } from './nestar-batch.module';

async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(NestarBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
=======
	const app = await NestFactory.create(NestarBatchModule);
	await app.listen(process.env.PORT_BATCH ?? 3000);
>>>>>>> 64aa8b8 (feat: nestar loyihani qaytib tikladim)
}
bootstrap();
