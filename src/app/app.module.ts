import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './panel/search/search.component';
import { AddComponent } from './panel/add/add.component';
import { SortByCategoryComponent } from './panel/sort-by-category/sort-by-category.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CategoryFilterPipe } from './category-filter.pipe';
import { CarsService } from './cars/cars.service';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarItemComponent } from './cars/cars-list/car-item/car-item.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SearchComponent,
    AddComponent,
    SortByCategoryComponent,
    SearchFilterPipe,
    CategoryFilterPipe,
    CarItemComponent,
    CarDetailsComponent,
    CarsListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
