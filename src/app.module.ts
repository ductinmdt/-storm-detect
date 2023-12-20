import { Module } from '@nestjs/common';
import { StormModule } from './modules/storm/storm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { config } from 'dotenv';
import { Storm } from './entities/storm.entity';
import { User } from './entities/user.entity';
import { Comment } from './entities/comment.entity';
config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: + process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      // synchronize: true,
    }),
    TypeOrmModule.forFeature([Storm, Comment, User]),
    StormModule,
    UserModule,
  ],
})
export class AppModule {}
