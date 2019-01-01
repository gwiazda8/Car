import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CarsService } from '../cars.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  car: Car[];
  @Output() emitCars = new EventEmitter<Car>();

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.car = this.carsService.getCars();

  }

  onCarWasSelected(car) {

    this.emitCars.emit(car);
  }
}
