import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './srp/order/order.module';
import { EmailModule } from './srp/email/email.module';
import { PrismaModule } from './prisma/prisma.module';
import { PaymentModule } from './ocp/payment/payment.module';
import { PaypalService } from './ocp/paypal/paypal.service';
import { StripeService } from './ocp/stripe/stripe.service';
import './prisma/prisma.service';

@Module({
  imports: [OrderModule, EmailModule, PrismaModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService, PaypalService, StripeService],
})
export class AppModule {}
