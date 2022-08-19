import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ContactData } from '../info-client/info-client.component';
import { ProductData } from '../produit/produit.component';
import { BoutiqueService } from '../service/boutique/boutique.service';

export interface InformationsChecked{
  checked :boolean
}  

export interface TotalPrice{
  price : number
}



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public products !: any[]
  public quantity !: any[]




  

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
  @Input() shortDescription : string[] = [""]
  @Input() size : string[] = [""]
  @Input() unityPrice : number[] = [0]
  @Input() quantitys : number[] = [0]
  @Input() price : number[] = [0]
  
  @Input() total : number = 0
  @Input() checked : boolean = false
  @Input() relais : boolean = false
  @Input() domicile : boolean = false
  

  @Output() informationsChecked = new EventEmitter<InformationsChecked>()
  @Output() totalPrice = new EventEmitter<TotalPrice>()
  constructor(
    private router : Router,
    private boutiqueService : BoutiqueService,) { }

  ngOnInit(): void {
    
    this.boutiqueService.getProducts()
    .subscribe(value=>{
      this.products = value;
           
    })
    for (let i = 0; i < this.products.length; i = i+1) {
     
      if(this.productDatas.nomPersonnalisation || this.productDatas.numeroPersonnalisation){
        this.products[i][0].price = +this.products[i][0].price + + 10
      }    
      this.total = +this.total + +(this.products[i][0].price*this.products[i][2])
  }

  

  }

expRelais(){
  this.relais=true
  this.domicile=false
  this.total = this.total + 3.99
}

expDomicile(){
  this.domicile=true
  this.relais=false
  this.total = this.total + 5.99
}

onShop(){
  this.router.navigateByUrl('boutique')    

}

  onCheck(){
this.checked = true
this.informationsChecked.emit({
  checked : this.checked
})
console.log(this.informationsChecked);

this.totalPrice.emit({
  price : this.total
})



  }




  
}
