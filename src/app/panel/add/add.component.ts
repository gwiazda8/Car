import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars/cars.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from '../../cars/car.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  car: Car;
  sForm: FormGroup;


  ngOnInit() {
    this.sForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'priceCar': new FormControl(null, [Validators.required, Validators.min(20), Validators.max(10000000)]),
      'yearOfProductionCar': new FormControl(null, [Validators.required, Validators.min(1940), Validators.max(2018) ]),
      'vehicleMileageCar': new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000000)]),
      'enginePowerCar': new FormControl(null, [Validators.required, Validators.min(10), Validators.max(800)]),
      'imageCar': new FormControl(null, Validators.required),
      'categoryCar': new FormControl(null, Validators.required),

    });
  }
  constructor(private carsService: CarsService) { }



  addNewCar() {
    this.car = new Car(this.sForm.value.name, this.sForm.value.categoryCar, this.sForm.value.priceCar,
      this.sForm.value.yearOfProductionCar, this.sForm.value.vehicleMileageCar,
      this.sForm.value.enginePowerCar, this.sForm.value.imageCar);
      this.carsService.addNewCar(this.car);
      this.sForm.reset();
      console.log(this.car);

  }

}
