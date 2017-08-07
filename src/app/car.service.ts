import { Injectable } from '@angular/core';

import { Car } from './entity/car'

const cars: Car[] = [{ id: 1, year: 1997, make: 'Ford', model: 'E350', description: 'ac, abs, moon', price: 3000 }
  , { id: 2, year: 1999, make: 'Chevy', model: 'Venture', description: 'None', price: 4900 }
  , { id: 3, year: 2000, make: 'Chevy', model: 'Venture', description: '', price: 5000 }
  , { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', description: 'Moon roof', price: 4799 }];


@Injectable()
export class CarService {

  id: number;

  constructor() {
    this.id = cars.length + 1;
  }

  getId() {
    this.id++;
    return this.id;
  }

  getCar(id: number): Car {
    return cars.find(car => car.id === id);
  }

  getCars(): Car[] {
    return cars;
  }

  deleteCar(car: Car): void {
    const index: number = cars.indexOf(car);
    if (index !== -1) {
      cars.splice(index, 1);
    }
  }

  addCar(car: Car): void {
    car.id = this.getId();
    cars.push(new Car(car.id, car.year, car.make, car.model, car.description, car.price));

  }

  editCar(car: Car): void {
    const index: number = cars.indexOf(this.getCar(car.id));
    cars[index] = car;
  }
}
