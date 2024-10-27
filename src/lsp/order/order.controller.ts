import { Controller, Get, Inject, Param } from '@nestjs/common';
import { DiscountPricing } from '../pricing/discount-pricing.service';
import { PricingService } from '../pricing/pricing.service';
import { OrderService } from './order.service';

@Controller('lsp/order')
export class OrderController {
    constructor(@Inject(DiscountPricing) private pricingService: PricingService, private orderService: OrderService) { }

    @Get('/pricing/:id')
    async calculate(@Param('id') id: string): Promise<{price:number}> {
        const order = this.orderService.findOne(parseInt(id));

        return {price:this.pricingService.calculateNewPrice((await order).totalPrice)}
    }
}
