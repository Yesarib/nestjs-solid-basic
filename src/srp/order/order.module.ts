import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmailService } from '../email/email.service';

@Module({
  imports:[PrismaModule],
  providers: [OrderService,EmailService],
  controllers: [OrderController]
})
export class OrderModule {}
