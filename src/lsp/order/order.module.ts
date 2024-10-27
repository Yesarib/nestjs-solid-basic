import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PricingModule } from '../pricing/pricing.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, PricingModule],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
