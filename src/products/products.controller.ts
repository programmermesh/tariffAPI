import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from './products.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get(':consumption')
  @ApiParam({ name: 'consumption' })
  getAllProducts(@Param('consumption') requestBody: ProductsDto) {
    return this.ProductsService.getBasicElectricityTariffAndPackageTariff(
      requestBody,
    );
  }
}
