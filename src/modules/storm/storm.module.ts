import { Module } from '@nestjs/common';
import { StormService } from './storm.service';
import { StormController } from './storm.controller';
import { Storm } from 'src/entities/storm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [Storm, TypeOrmModule.forFeature([Storm])],
  controllers: [StormController],
  providers: [StormService],
  
})
export class StormModule {}