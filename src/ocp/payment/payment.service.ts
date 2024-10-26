import { Injectable } from '@nestjs/common';

import { PaymentProviderFactory } from './payment.provider';

@Injectable()
export class PaymentService {
    constructor(private providerFactory: PaymentProviderFactory) { }

    async payment(amount: number, provider: string): Promise<{ provider: string, success: boolean }> {
        const paymentProvider = this.providerFactory.createProvider(provider);
        const success = await paymentProvider.processPayment(amount);
        return { provider, success };
    }
}
