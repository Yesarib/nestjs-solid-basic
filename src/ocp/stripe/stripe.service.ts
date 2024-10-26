import { Injectable } from '@nestjs/common';
import { PaymentProvider } from '../payment/payment-provider.interface';

@Injectable()
export class StripeService implements PaymentProvider {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} with Stripe.`);

        return true;
    }
}
