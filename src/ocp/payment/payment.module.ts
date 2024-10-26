import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaypalService } from '../paypal/paypal.service';
import { StripeService } from '../stripe/stripe.service';
import { PaymentController } from './payment.controller';
import { PaymentProviderFactory } from './payment.provider';

@Module({
  providers: [
      PaymentProviderFactory,
      PaymentService,
      PaypalService,
      StripeService,
  ],
  controllers:[PaymentController],
  exports: [PaymentService], 
})
export class PaymentModule {}
