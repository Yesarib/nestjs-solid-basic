import { Injectable } from '@nestjs/common';
import { PayPalPayment } from '../payment.interface';

@Injectable()
export class PayPalService implements PayPalPayment {
  pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal.`);
  }

  login(email: string, password: string): void {
    console.log(`Logging in to PayPal with email: ${email}`);
  }
}