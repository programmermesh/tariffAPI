import { Injectable } from '@nestjs/common';
import { ProductsDto } from './products.dto';

@Injectable()
export class ProductsService {
  getBasicElectricityTariffAndPackageTariff(consumption: ProductsDto): any {
    let baseCostsYearly = 60;
    let additionalCostPerCent = 0.3;
    let consumptionCostPerCent = 0.22;

    const consumptionCostsBasicElectricityTariff =
      Number(consumption) * consumptionCostPerCent;
    var annualBasicElectricityTariffCost =
      baseCostsYearly + consumptionCostsBasicElectricityTariff;

    if (Number(consumption) <= 4000) {
      var annualPackagedTariffCost = 800;
    } else {
      const consumptionCostsPackagedTariff =
        (Number(consumption) - 4000) * additionalCostPerCent;
      var annualPackagedTariffCost = 800 + consumptionCostsPackagedTariff;
    }

    let products = [
      {
        name: 'basic electricity tariff',
        cost: annualBasicElectricityTariffCost,
      },
      {
        name: 'Packaged tariff',
        cost: annualPackagedTariffCost,
      },
    ];

    products.sort((a, b) => {
      return Number(a.cost) - Number(b.cost);
    });

    return products;
  }
}
