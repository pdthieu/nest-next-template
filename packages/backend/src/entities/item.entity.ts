import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ItemEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'character varying' })
  name: string;

  @Column({ type: 'character varying' })
  descrition: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'int' })
  cost: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;
}
