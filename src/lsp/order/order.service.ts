import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) { }

    async findOne(orderId: number): Promise<Order> {
        return this.prisma.order.findFirst({ where: { orderId } })
    }
}
