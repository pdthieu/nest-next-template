import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskEntity } from 'src/entities/task.entity';
import { AddTaskDto } from './task-manager.dto';
import { TaskManagerService } from './task-manager.service';

@ApiTags('task-manager')
@Controller('task-manager')
export class TaskManagerController {
  constructor(private readonly taskManagerSrv: TaskManagerService) {}

  @Get('/tasks')
  async getAllTasks() {
    return this.taskManagerSrv.getAllTasks();
  }

  @Post('/create')
  async createTask(@Body() body: AddTaskDto): Promise<TaskEntity> {
    return this.taskManagerSrv.createTask(body);
  }
}
