import { Pipe, PipeTransform } from '@angular/core';

import { CarsService } from './cars/cars.service';
import { Car } from './cars/car.model';
@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {

  constructor(private carsService: CarsService) { }

  transform(cars: Car[]): any {

    const filter = this.carsService.getCategoryValue();

    const tempArray: Car[] = [];

    if (filter === 'Wszystkie') {
      return cars;
    }

    for (const item of cars) {
      if (item['category'] === filter) {
        tempArray.push(item);
      }
    }

    return tempArray;
  }

}
