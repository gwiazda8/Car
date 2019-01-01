export class Car {
  name: string;
  category: string;
  price: number;
  yearOfProduction: number;
  vehicleMileage: number;
  enginePower: number;
  imagePath: string;


  constructor(name: string, category: string, price: number, yearOfProduction: number,
     vehicleMileage: number, enginePower: number, imagePath: string) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.yearOfProduction = yearOfProduction;
    this.vehicleMileage = vehicleMileage;
    this.enginePower = enginePower;
    this.imagePath = imagePath;



  }
}
