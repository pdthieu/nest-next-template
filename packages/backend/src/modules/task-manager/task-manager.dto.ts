import { IsEnum, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { TaskEntity, TeamType } from 'src/entities/task.entity';

export class AddTaskDto {
  @ApiProperty({ type: String, enum: TeamType, enumName: 'TeamType' })
  @IsEnum(TeamType)
  team: TeamType;

  @ApiProperty({ type: String })
  @IsString()
  description: string;
}

export class TasksResponseDto {
  @ApiProperty({ type: Number })
  totalCount: number;

  @ApiProperty({ type: [TaskEntity] })
  data: TaskEntity[];
}
