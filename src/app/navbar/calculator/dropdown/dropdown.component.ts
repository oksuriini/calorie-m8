import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../../calculator/calculator.service';
import { Fooditem } from '../../../calculator/fooditem';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent implements OnInit {
  constructor(private calculatorService: CalculatorService) {}

  dropDownOptions: Fooditem[] = [];
  ngOnInit(): void {
    this.dropDownOptions = this.calculatorService.getAllItems();
  }

  getOptions() {
    return this.dropDownOptions;
  }
}
