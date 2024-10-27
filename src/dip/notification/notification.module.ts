import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { EmailService } from './email/email.service';
import { SmsService } from './sms/sms.service';
import { MessageService } from './message-service.interface';

@Module({
  providers: [NotificationService,
    EmailService,
    SmsService,
    {
      provide: "MESSAGE_SERVICES",
      useFactory:(emailService:EmailService, smsService:SmsService) => {
        return [emailService,smsService]
      },
      inject:[EmailService,SmsService]
    }
  ],
  controllers: [NotificationController]
})
export class NotificationModule {}
