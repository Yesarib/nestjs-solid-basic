import { Injectable } from '@nestjs/common';
import { CreditCardPayment } from '../payment.interface';

@Injectable()
export class CreditCardService implements CreditCardPayment {
    validateCard(cardNumber: string): boolean {
        console.log(`Validating Credit Card: ${cardNumber}`);
        return true;
    }
    pay(amount: number): void {
        console.log(`Paying ${amount} using Credit Card.`);
    }
}
