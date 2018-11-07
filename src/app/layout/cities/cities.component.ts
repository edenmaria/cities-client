import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { CitiesService } from '../../services/cities.service/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  animations: [routerTransition()]
})
export class CitiesComponent implements OnInit {

  rows: any;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.citiesService.changeEmitted$.subscribe( res => {
      this.citiesService.getCities()
      .subscribe( (resp) => {
        this.rows = resp;
    });
    });
    this.citiesService.emitChange();
  //   this.citiesService.getCities()
  //   .subscribe( (resp) => {
  //     this.rows = resp;
  // });
    
  }

}
