import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';


@Injectable()
export class RegularPricing implements PricingService {
    calculateNewPrice(basePrice:number):number {
        return basePrice;
    }
}