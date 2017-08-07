import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Car } from '../entity/car';
import { CarService } from '../car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  //Input variable HAS to be initialized!!
  @Input() car: Car;
  currency: any;
  @Input() calcPrice: number;
  @Input() selectedValue: any;
  currencies = [
    { viewValue: "USD", value: "$", multiplier: 1 },
    { viewValue: "DKK", value: "kr.", multiplier: 6.27 },
    { viewValue: "GBP", value: "€", multiplier:  0.76}
  ];

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.car = this.carService.getCar(+params['id']);
    });
    this.currency = this.currencies[0].value;
    this.selectedValue = this.currency;
    this.calcPrice = this.car.price;
  }

  changeCurrency(cur: any) {
    this.calcPrice = this.car.price * this.currencies.filter(obj => obj.value == cur)[0].multiplier;
    this.calcPrice = parseFloat(this.calcPrice.toFixed(0));
    this.currency = cur;
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.carService.editCar(this.car);
    this.location.back();
  }
}
