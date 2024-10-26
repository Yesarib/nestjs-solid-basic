import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post()
    async makePayment(@Body('amount') amount: number, @Body('provider') provider: string): Promise<{ provider: string, success: boolean }> {
        const result = await this.paymentService.payment(amount, provider);
        return result;
    }
}
