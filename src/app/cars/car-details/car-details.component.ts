import { Component, Input } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  @Input() car;


  constructor(private carsService: CarsService) { }

  comeback() {
    this.carsService.setDetailsVisible(false);
  }
}
