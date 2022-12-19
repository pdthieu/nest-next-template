import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  InvalidTeamException,
  NotFoundTaskException,
} from '@core/exceptions/task';
import { TaskEntity, TeamType } from 'src/entities/task.entity';

import {
  AddTaskDto,
  TasksResponseDto,
  UpdateTaskDto,
} from './task-manager.dto';

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

  async createTask(input: AddTaskDto) {
    return this.taskRepo.save({
      team: input.team,
      description: input.description,
    });
  }

  async updateTask(input: UpdateTaskDto) {
    const task = await this.taskRepo.findOneBy({ id: input.id });

    if (!task) {
      throw new NotFoundTaskException();
    }

    if (input.team && !Object.values(TeamType).includes(input.team)) {
      throw new InvalidTeamException();
    }

    await this.taskRepo
      .createQueryBuilder('task')
      .update(TaskEntity)
      .when(input.team, (query) => query.set({ team: input.team }))
      .when(input.description, (query) =>
        query.set({ description: input.description }),
      )
      .where('id = :id', { id: input.id })
      .execute();
  }

  async deleteTask(id: number) {
    const task = await this.taskRepo.findOneBy({ id });

    if (!task) {
      throw new NotFoundTaskException();
    }

    return this.taskRepo.delete({ id });
  }
}
