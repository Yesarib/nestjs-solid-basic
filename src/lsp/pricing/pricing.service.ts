import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PricingService {
    public calculateNewPrice(basePrice:number) {
        return basePrice;
    }
}
