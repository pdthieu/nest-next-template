import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TaskEntity } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { AddTaskDto, TasksResponseDto } from './task-manager.dto';

@Injectable()
export class TaskManagerService {
  constructor(
    @InjectRepository(TaskEntity) private taskRepo: Repository<TaskEntity>,
  ) {}

  async getAllTasks(): Promise<TasksResponseDto> {
    const tasks = await this.taskRepo.find();

    return {
      totalCount: tasks.length,
      data: tasks,
    };
  }

  async createTask(task: AddTaskDto) {
    return this.taskRepo.save({
      team: task.team,
      description: task.description,
    });
  }

  async deleteTask(id: number) {
    return this.taskRepo.delete({ id });
  }
}
