import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    CitiesComponent
  ]
})
export class CitiesModule { }
