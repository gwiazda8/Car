import { Component, OnInit } from '@angular/core';
import {  CarsService } from '../../cars/cars.service';
@Component({
  selector: 'app-sort-by-category',
  templateUrl: './sort-by-category.component.html',
  styleUrls: ['./sort-by-category.component.css']
})
export class SortByCategoryComponent implements OnInit {
  value = 'Wszystkie';

  categories = ['Wszystkie', 'Sportowy', 'Rodzinny'];


  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  onSelectedCategory() {
    this.value = event.srcElement.innerHTML;
    this.carsService.setCategoryValue(this.value);

  }

}
