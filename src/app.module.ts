import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SrpOrderModule } from './srp/order/order.module';
import { EmailModule } from './srp/email/email.module';
import { PrismaModule } from './prisma/prisma.module';
import { OcpPaymentModule } from './ocp/payment/payment.module';
import { PaypalService } from './ocp/paypal/paypal.service';
import { StripeService } from './ocp/stripe/stripe.service';
import { PricingModule } from './lsp/pricing/pricing.module';
import { OrderModule } from './lsp/order/order.module';
import { CreditCardService } from './isp/payment/credit-card/credit-card.service';
import { PaymentService } from './isp/payment/payment.service';
import { PaymentController } from './isp/payment/payment.controller';
import { PaymentModule } from './isp/payment/payment.module';
import { NotificationModule } from './dip/notification/notification.module';
import './prisma/prisma.service';

@Module({
  imports: [OrderModule,SrpOrderModule,OcpPaymentModule, EmailModule, PrismaModule, PaymentModule, PricingModule, NotificationModule],
  controllers: [AppController, PaymentController],
  providers: [AppService, PaypalService, StripeService, CreditCardService, PaymentService],
})
export class AppModule {}
