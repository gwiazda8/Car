import { Pipe, PipeTransform } from '@angular/core';

import { CarsService } from './cars/cars.service';
import { Car } from './cars/car.model';
@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  constructor(private carsService: CarsService) { }

  transform(cars: Car[]): any {

    const filter = this.carsService.getSearchValue();

    const tempArray: Car[] = [];

    if (cars.length === 0 || filter === '') {
      return cars;
    }

    for (const item of cars) {
      if (item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
        tempArray.push(item);
      }
    }

    return tempArray;
  }

}
