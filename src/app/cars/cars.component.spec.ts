import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import 'hammerjs';

import { CarsComponent } from './cars.component';
import { CarService } from "../car.service";
import { MaterialModule } from "@angular/material";
import { FormsModule } from "@angular/forms/";
import { AppRoutingModule } from "../routing/routing.module";
import { CarDetailComponent } from "../car-detail/car-detail.component";


describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarsComponent, CarDetailComponent],
      imports: [AppRoutingModule, MaterialModule, BrowserAnimationsModule, FormsModule],
      providers: [CarService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
