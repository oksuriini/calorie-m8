import { NgFor, NgIf } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, DropdownComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  calorieForm = new FormGroup({
    calorieTarget: new FormControl(''),
  });
  counter: number = 1;

  calorieTarget: string = '';

  constructor() {}

  // Change calorieTarget on input change
  handleForm() {
    if (this.calorieForm.value.calorieTarget) {
      this.calorieTarget = this.calorieForm.value?.calorieTarget;
    }
  }

  counterCount(num: number) {
    return new Array(num);
  }

  // This enables always one dropdown menu available
  counterIsMoreThanOne(): boolean {
    if (this.counter > 1) {
      return true;
    } else {
      return false;
    }
  }

  // Add one to counter, which increases dropdown menu count
  addToCounter() {
    this.counter += 1;
  }
  // Remove one so dropdown menu count decreases
  removeFromCounter() {
    this.counter -= 1;
  }
}
