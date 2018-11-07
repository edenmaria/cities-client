import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormBuilder } from '@angular/forms';

import { CitiesService } from '../../../services/cities.service/cities.service';

@Component({
    selector: 'app-add-city',
    templateUrl: './add-city.component.html',
    styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
    closeResult: string;
    form: FormGroup;
    @Input() data: any;

    constructor(
        private modalService: NgbModal,
        private formBuilder: FormBuilder,
        private citiesService: CitiesService) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: '',
            zipcode: '',
            population: '',
        });
        console.log(this.data);
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            this.citiesService.addCity(result.value)
              .subscribe( (resp) => {
                  this.citiesService.emitChange();
            });

        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            console.log('by pressing ESC');
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            console.log('by clicking on a backdrop');
            return 'by clicking on a backdrop';
        } else {
            console.log(`with: ${reason}`);
            return  `with: ${reason}`;
        }
    }
}
