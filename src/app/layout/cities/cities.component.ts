import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  animations: [routerTransition()]
})
export class CitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
