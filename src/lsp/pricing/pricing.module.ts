import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { RegularPricing } from './regular-pricing.service';
import { DiscountPricing } from './discount-pricing.service';

@Module({
  providers: [RegularPricing,DiscountPricing],
  exports: [RegularPricing,DiscountPricing],
})
export class PricingModule {}
