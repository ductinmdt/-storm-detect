import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MqttClient } from 'mqtt';
import { Storm } from 'src/entities/storm.entity';
import mqtt from 'mqtt';

const key = 'https://test-upload-image-file.s3.ap-southeast-1.amazonaws.com/back-end-exam/private_key.key'
const cert = 'https://test-upload-image-file.s3.ap-southeast-1.amazonaws.com/back-end-exam/certificate.crt'
const ca = 'https://test-upload-image-file.s3.ap-southeast-1.amazonaws.com/back-end-exam/root_ca.pem'

@Injectable()
export class StormService {
  private client: MqttClient;

  constructor(
    @InjectRepository(Storm)
    private stormsRepository: Repository<Storm>,
  ) {
    this.client = mqtt.connect(
      'mqtts://a3lafbeca71eu5-ats.iot.ap-southeast-1.amazonaws.com:8883',
      { key, cert, ca },
    );

    this.client.on('connect', () => {
      this.client.subscribe('back-end-exam');
    });

    this.client.on('message', (topic, message) => {
      if (topic === 'back-end-exam') {
        console.log( message);
      }
    });
  }

  async getStormsByCity(cityName: string): Promise<Storm[]> {
    return this.stormsRepository.find({
      where: { cityName: cityName },
      order: { cityName: 'DESC', detectedTime: 'ASC' },
    });
  }
}