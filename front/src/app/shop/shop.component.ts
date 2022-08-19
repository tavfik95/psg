import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChoixBoutique } from '../boutique/boutique.component';
import { ContactData } from '../info-client/info-client.component';
import { Produit } from '../model/produit-model';
import { PaymentApproved } from '../payment/payment.component';
import { ProductData } from '../produit/produit.component';
import { InformationsChecked, TotalPrice } from '../summary/summary.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  public products !: any[]

  @Input() produit!:Produit
  
  @Input() total : number =0 

  @Input() productDatas: ProductData = { 
    photo: "",
    shortDescription : "",
    price : 0,
    quantity: 0,
    sousTotal: 0,
    total: 0,
    size : 0,
    nomPersonnalisation: "",
    numeroPersonnalisation: "",
    productIsSubmitted:false
  }

  @Input() contactDatas: ContactData ={
    firstName: " ",
    lastName: " ",
    phone: " ",
    address: " ",
    mail: " ",
    city: " ",
    postalCode: " ",
    contactIsSubmitted: false,
  }

  @Input() informationsChecked : InformationsChecked ={
    checked: false
  }
  
  @Input() totalPrice : TotalPrice ={
    price: 0
  }

  @Input() paymentApproved : PaymentApproved = {
    approved: false,
    transactionId: " ",
    transactionAmount: ''
  }

  @Input() choixBoutique : ChoixBoutique = {
    enfant : false,
    femme : false,
    homme : false,
  }
  

  constructor() { }

  ngOnInit(): void {
    
  }
    
    
  }


