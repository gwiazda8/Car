import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable()
export class CarsService {
  cars: Car[] = [

    new Car('Fiat', 'Sportowy', 12000, 2007, 170000, 80, 'assets/fiat.jpg'),
    new Car('Honda', 'Sportowy', 16000, 2005, 180000, 110, 'assets/honda.jpg'),
    new Car('Opel', 'Sportowy', 18000, 2010, 150000, 130, 'assets/opel.jpg'),
    new Car('Polonez', 'Sportowy', 1000, 1979, 600000, 60, 'assets/polonez.jpg'),
    new Car('Maluch', 'Sportowy', 200, 1969, 700000, 40, 'assets/maluch.jpg'),
    new Car('Audi', 'Rodzinny', 20000, 2007, 100000, 160, 'assets/audi.jpg'),
    new Car('Skoda', 'Rodzinny', 15000, 2008, 600000, 110, 'assets/skoda.jpg'),
    new Car('Mercedes', 'Rodzinny', 17000, 2003, 190000, 190, 'assets/mercedes.jpg'),
    new Car('BMW', 'Sportowy', 10000, 2000, 150000, 150, 'assets/bmw.jpg'),
  ];

  filter = {
    search: '',
    category: 'Wszystkie'
  };

  carDetailsVisible = false;

  setDetailsVisible(value: boolean) {
    this.carDetailsVisible = value;
  }

  getDetailsVisible() {
    return this.carDetailsVisible;
  }


  setSearchValue(value) {
    this.cars = this.cars.slice();
    this.filter.search = value;
  }

  setCategoryValue(value) {
    this.filter.category = value;
  }

  getSearchValue() {
    return this.filter.search;
  }

  getCategoryValue() {
    return this.filter.category;
  }

  getCars() {

    return this.cars;

  }

  addNewCar(car: Car) {
    this.cars.push(car);

  }

  removeCar(id) {
    this.cars.splice(id, 1);


  }


}
