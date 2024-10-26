import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { EmailService } from '../email/email.service';

@Controller('order')
export class OrderController {
    constructor(
        private orderService: OrderService,
        private emailService: EmailService
    ) {

    }

    @Post()
    async newOrder(@Body() order:any) {
        const newOrder = await this.orderService.submitOrder(order);

        await this.emailService.sendOrderEmail(newOrder.orderId);

        return newOrder;
    }
}
