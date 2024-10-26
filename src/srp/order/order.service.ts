import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { Prisma, Order } from '@prisma/client';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService, private emailService: EmailService) {

    }

    async submitOrder(data: any): Promise<Order> {
        const newOrder = await this.prisma.order.create({data});

        // For example do not email notification here
        // Order service will only do their own logic
        // this.emailService.sendOrderEmail(newOrder.orderId);
        return newOrder
    }
}
