import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }

    @Post('send')
    sendNotification(@Body('to') to: string, @Body('message') message: string) {
        this.notificationService.notify(to, message)
    }
}


