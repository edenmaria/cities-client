import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { PageHeaderModule } from './../../shared';
import { AddCityComponent } from './add-city/add-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { ViewCityComponent } from './view-city/view-city.component';
import { DeleteCityComponent } from './delete-city/delete-city.component';

@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CitiesComponent,
    AddCityComponent,
    EditCityComponent,
    ViewCityComponent,
    DeleteCityComponent
  ]
})
export class CitiesModule { }
