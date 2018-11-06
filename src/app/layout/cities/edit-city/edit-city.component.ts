import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-edit-city',
    templateUrl: './edit-city.component.html',
    styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {
    closeResult: string;
    form: FormGroup;
    @Input() data: string;

    constructor(
        private modalService: NgbModal,
        private formBuilder: FormBuilder) { }

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
