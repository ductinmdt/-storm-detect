import { PrimaryGeneratedColumn, ManyToOne, OneToMany, Column, Entity  } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import { User } from './user.entity';

@Entity("storms")
export class Storm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cityName: string;

  @Column()
  affectedAreas: number;

  @Column()
  detectedTime: Date;

  @ManyToOne(() => User, (user) => user.storms)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.storm)
  comments: Comment[];
}
