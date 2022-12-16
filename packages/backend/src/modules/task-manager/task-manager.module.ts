import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskManagerController } from './task-manager.controller';
import { TaskManagerService } from './task-manager.service';
import { TaskEntity } from 'src/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskManagerController],
  providers: [TaskManagerService],
  exports: [TaskManagerService],
})
export class TaskManagerModule {}
