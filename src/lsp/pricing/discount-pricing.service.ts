import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Injectable()
export class DiscountPricing implements PricingService {
    calculateNewPrice(basePrice:number):number {
        return basePrice;
    }
}