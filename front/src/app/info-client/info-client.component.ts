import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { ProductData } from '../produit/produit.component';


export interface ContactData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  mail: string;
  city: string;
  postalCode: string;
  contactIsSubmitted: boolean;
}

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.css']
})
export class InfoClientComponent implements OnInit {
  @Input() contactIsSubmitted : boolean=false

  @Input() productDatas: ProductData = { 
    photo: "",
    shortDescription: " ",
    price : 0,
    quantity: 0, 
    sousTotal: 0,
    total: 0,
    size : 0,
    nomPersonnalisation: "",
    numeroPersonnalisation: "",
    productIsSubmitted : false,
    
  }

  
  @Output() contactDatas = new EventEmitter<ContactData>()


  formContact!: FormGroup;
  controlFirstName = new FormControl('');
  controlLastName = new FormControl('');
  controlPhone = new FormControl('');
  controlAddress = new FormControl('');
  controlMail = new FormControl('');
  controlCity = new FormControl('');
  controlPostalCode = new FormControl('');

  constructor(
    private router : Router, 
    private formBuilder : FormBuilder,


  ) {
     
      this.formContact = formBuilder.group({
        firstName: this.controlFirstName,
        lastName: this.controlLastName,
        phone: this.controlPhone,
        address: this.controlAddress,
        mail: this.controlMail,  
        city: this.controlCity,
        postalCode: this.controlPostalCode,

      });    
    }
  
  ngOnInit(): void {

  }

  onSubmit(){
    this.contactIsSubmitted = true
    this.contactDatas.emit({
      firstName : this.controlFirstName.value, 
      lastName : this.controlLastName.value,
      phone : this.controlPhone.value,
      address : this.controlAddress.value,
      mail : this.controlMail.value,
      city : this.controlCity.value,
      postalCode : this.controlPostalCode.value,
      contactIsSubmitted : this.contactIsSubmitted
    });
  }
}
