import { Inject, Injectable } from '@nestjs/common';
import { MessageService } from './message-service.interface';

@Injectable()
export class NotificationService {
    constructor(@Inject('MESSAGE_SERVICES') private readonly messageServices: MessageService[]) {}

    notify(to: string, message: string): void {
        this.messageServices.forEach(service => service.sendMessage(to, message));
    }
}
