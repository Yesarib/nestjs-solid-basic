import { Injectable } from '@nestjs/common';
import { MessageService } from '../message-service.interface';

@Injectable()
export class SmsService implements MessageService {
  sendMessage(to: string, message: string): void {
    console.log(`Sending SMS to ${to}: ${message}`);
  }
}