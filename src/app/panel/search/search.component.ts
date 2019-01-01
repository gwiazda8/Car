import { Component } from '@angular/core';
import {  CarsService } from '../../cars/cars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
clientSearch;

  constructor(private carsService: CarsService) { }


  searchCars(value) {
    this.carsService.setSearchValue(value);
  }
}
