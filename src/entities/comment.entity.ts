import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Storm } from './storm.entity';

@Entity("comment")
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  video: string;

  @Column()
  image: string;

  @Column()
  userId: number;

  @Column()
  stormId: number;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Storm, (storm) => storm.user)
  storm: Storm;
}
