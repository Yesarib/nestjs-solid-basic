import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    public async sendOrderEmail(orderId: number) {
        console.log(`Sending order email for order ${orderId}`);
      }
}
