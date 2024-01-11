import { Injectable } from '@angular/core';
import { Fooditem } from './fooditem';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  foodItems: Fooditem[] = [
    new Fooditem('Cake', '354'),
    new Fooditem('Cereals', '370'),
  ];

  constructor() {}

  getAllItems(): Fooditem[] {
    return this.foodItems;
  }
}
