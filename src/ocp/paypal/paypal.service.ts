import { Injectable } from '@nestjs/common';
import { PaymentProvider } from '../payment/payment-provider.interface';

@Injectable()
export class PaypalService implements PaymentProvider {
    processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} with PayPal.`);
        return Promise.resolve(true);;
    }

}
