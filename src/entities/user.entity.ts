import { Storm } from './storm.entity';
import { Comment } from './comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @OneToMany(() => Storm, (storm) => storm.user)
  storms: Storm[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
