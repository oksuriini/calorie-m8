import { Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { CalculatorComponent } from './navbar/calculator/calculator.component';
import { InfoComponent } from './navbar/info/info.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  { path: 'info', component: InfoComponent },
];
