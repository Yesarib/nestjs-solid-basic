import { Injectable } from '@nestjs/common';
import { MessageService } from '../message-service.interface';

@Injectable()
export class EmailService implements MessageService {
  sendMessage(to: string, message: string): void {
    console.log(`Sending email to ${to}: ${message}`);
  }
}