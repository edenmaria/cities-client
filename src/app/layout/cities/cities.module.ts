import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';


@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule
  ],
  declarations: [
    CitiesComponent
  ]
})
export class CitiesModule { }
