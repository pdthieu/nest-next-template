import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import LoggerModule, { RequestLogginMiddleware } from '@modules/logger';
import OrderModule from '@modules/order';

@Module({
  imports: [LoggerModule, OrderModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLogginMiddleware).forRoutes('*');
  }
}
