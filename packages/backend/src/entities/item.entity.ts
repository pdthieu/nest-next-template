import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: String })
  name: string;

  @Column({ type: String })
  descrition: string;

  @Column({ type: Number })
  quantity: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;
}
