import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarService } from "../car.service";
import { Car } from "../entity/car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;

  @Input() car: Car;

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCars();
    
    //Input variable HAS to be initialized!!
    this.car = {} as Car;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCar.id]);
  }

  onSelect(car: Car): void {
    car === this.selectedCar ? this.selectedCar = null : this.selectedCar = car;
  }

  getCars(): void {
    this.cars = this.carService.getCars();
  }

  addCar(): void {
    this.carService.addCar(this.car);
  }

  deleteCar(car: Car): void {
    this.carService.deleteCar(car);
  }
}
