import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CarsService } from '../../cars.service';
import { Car } from '../../car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  @Input() cars: Car;
  @Input() id: number;
  @Output() carSelected: EventEmitter<void> = new EventEmitter<void>();
  test: EventEmitter<string> = new EventEmitter<string>();
  constructor(private carsService: CarsService) { }



  ngOnInit() {

  }

  removeItem(id) {
    this.carsService.removeCar(id);


  }

  onSelected() {
    this.carsService.setDetailsVisible(true);
    this.test.emit('wysylam');
    this.carSelected.emit();
  }

}
