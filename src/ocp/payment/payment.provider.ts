import { Injectable } from '@nestjs/common';
import { PaymentProvider } from '../payment/payment-provider.interface';
import { PaypalService } from '../paypal/paypal.service';
import { StripeService } from '../stripe/stripe.service';

@Injectable()
export class PaymentProviderFactory {
    private providers: { [key: string]: PaymentProvider } = {};

    constructor() {
        this.providers['paypal'] = new PaypalService();
        this.providers['stripe'] = new StripeService();
        // If new provider needs
        // this.providers['newProvider'] = new NewProviderService();
    }

    createProvider(provider: string): PaymentProvider {
        const paymentProvider = this.providers[provider.toLowerCase()];
        if (!paymentProvider) {
            throw new Error('Unknown payment provider');
        }
        return paymentProvider;
    }
}
