import { NgFor, NgIf } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnChanges {
  calorieForm = new FormGroup({
    calorieTarget: new FormControl(''),
  });
  counter: number = 1;

  calorieTarget: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  handleForm() {
    if (this.calorieForm.value.calorieTarget) {
      this.calorieTarget = this.calorieForm.value?.calorieTarget;
    }
  }
  counterCount(num: number) {
    return new Array(num);
  }

  removeFromCounter() {
    this.counter -= 1;
  }

  counterIsMoreThanOne(): boolean {
    if (this.counter > 1) {
      return true;
    } else {
      return false;
    }
  }

  addToCounter() {
    this.counter += 1;
  }
}
