import { Component, Input, OnInit } from '@angular/core';
import { ContactData } from '../info-client/info-client.component';
import { PaymentApproved } from '../payment/payment.component';
import { ProductData } from '../produit/produit.component';
import { BoutiqueService } from '../service/boutique/boutique.service';
import { TotalPrice } from '../summary/summary.component';

@Component({
  selector: 'app-payment-approved',
  templateUrl: './payment-approved.component.html',
  styleUrls: ['./payment-approved.component.css']
})
export class PaymentApprovedComponent implements OnInit {

  public products !: any[]
  items !: any[] 
  @Input() totalPrice : TotalPrice ={
    price: 0
  }

  @Input() productDatas: ProductData = { 
    photo: "",
    shortDescription: " ",
    price : 0,
    quantity: 0, 
    sousTotal: 0,
    total : 0,
    size : 0,
    nomPersonnalisation: "",
    numeroPersonnalisation: "",
    productIsSubmitted : false,
    
  }

  @Input() contactDatas: ContactData = { 
    firstName: '', 
    lastName: '', 
    phone: '',  
    address: '', 
    mail:'', 
    city: '', 
    postalCode:'',
    contactIsSubmitted: false, 
  }


  @Input() paymentApproved: PaymentApproved = {
    approved:false,
    transactionId: "",
    transactionAmount:''
  }

  array : any[] = []

  constructor( private boutiqueService : BoutiqueService) { }

  ngOnInit(): void {
    console.log('ok1');
    
    this.boutiqueService.getProducts()
    .subscribe(value=>{
      this.products = value;
           
    })    
    console.log(this.products);
    // for (let i = 0; i <= this.products.length; i = i+1) {
    //   this.x = [this.products[i][0].shortDescription, this.products[i][1], this.products[i][2]]
    //   if (this.x===[""]){
    //   this.items = this.x;
    //   console.log(this.items);
    // }else{
    //   this.items = this.x.concat(this.x);
    //   console.log(this.items);
      
    // }
      
      // if (this.items === [" "]){
      //   this.items === this.x
      //   console.log("items inter 0", this.items);
        
      // }else{
      //   [this.items] === [this.items] + [this.items]
      //   console.log("items inter 1", this.items);
      // }
    //}
    //console.log("item final", this.items);


    for (let i = 0; i < this.products.length; i = i+1) {

      this.array.push([
        this.products[i][0].shortDescription,
        this.products[i][2],
        this.products[i][1]])

    }

      console.log(this.array);
  
    
        this.boutiqueService.addOrder({
          firstName : this.contactDatas.firstName,
          lastName : this.contactDatas.lastName,
          address : this.contactDatas.address,
          phone : this.contactDatas.phone,
          mail : this.contactDatas.mail,
          item : this.array,
          price : this.totalPrice.price
        }).subscribe({
          next:(values)=>console.log(values)
          
        })


  }

  
}
