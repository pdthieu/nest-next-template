import { loggerOptions } from '@core/config/winston';
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { LoggerService } from './logger.service';

@Module({
  imports: [WinstonModule.forRoot(loggerOptions)],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
