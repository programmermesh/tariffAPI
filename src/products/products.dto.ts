import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class ProductsDto {
  @ApiProperty()
  @IsInt()
  consumption: number;
}
