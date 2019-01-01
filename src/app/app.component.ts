import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarsService } from './cars/cars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit {
  carWasSelected: any;


  constructor(public carsService: CarsService) { }

  ngOnInit() {

  }

}
