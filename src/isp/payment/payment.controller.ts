import { Body, Controller, Post } from '@nestjs/common';
import { CreditCardService } from './credit-card/credit-card.service';
import { PayPalService } from './paypal/paypal.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly creditCardService: CreditCardService,
        private readonly payPalService: PayPalService
    ) { }

    @Post('credit-card')
    payWithCreditCard(@Body('amount') amount: number, @Body('cardNumber') cardNumber: string) {
        if (this.creditCardService.validateCard(cardNumber)) {
            this.creditCardService.pay(amount)
        } else {
            return "Credit card is not valid!"
        }
    }

    @Post('paypal')
    payWithPayPal(@Body('amount') amount: number, @Body('email') email: string, @Body('password') password: string) {
        this.payPalService.login(email, password);
        this.payPalService.pay(amount);
    }
}
