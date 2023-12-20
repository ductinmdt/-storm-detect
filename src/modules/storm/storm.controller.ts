import { Controller, Get, Param } from '@nestjs/common';
import { StormService } from './storm.service';

@Controller('storm')
export class StormController {
  constructor(private readonly stormService: StormService) {}

  @Get(':cityName')
  async getStorms(@Param('cityName') cityName: string) {
    return this.stormService.getStormsByCity(cityName);
  }
}
