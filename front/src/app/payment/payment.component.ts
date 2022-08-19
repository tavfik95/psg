import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ContactData } from '../info-client/info-client.component';
import { ProductData } from '../produit/produit.component';
import { BoutiqueService } from '../service/boutique/boutique.service';
import { InformationsChecked, TotalPrice } from '../summary/summary.component';

export interface PaymentApproved{
  approved :boolean,
  transactionId:string,
  transactionAmount:string,

} 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {

  public products !: any[]

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

  @Input() informationsChecked: InformationsChecked = {
    checked : false
  }

  @Input() totalPrice : TotalPrice ={
    price: 0
  }


  @Input() total : number =0 
  @Input() transactionId: string = ''
  @Input() captureId: string = ''
  @Input() transactionAmount: string = ''
  @Input() confirmed: boolean = false
  @Input() approved : boolean = false

  @Output() paymentApproved = new EventEmitter<PaymentApproved>()

  @ViewChild('paypal',{static:true}) paypal!: ElementRef;

  constructor(private boutiqueService : BoutiqueService) { }

  ngOnInit(): void {

   
    this.boutiqueService.getProducts()
    .subscribe(value=>{
      this.products = value;
      console.log(typeof(this.products));
           
    })    
    
    
    window.paypal.Buttons( 
      {
        style : {
          layout : 'horizontal',
          color : 'blue',
        },
        createOrder: (data : any, actions : any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {value: (this.totalPrice.price), code : 'EUR'}
            }]
          });
        },
        onApprove: (data : any, actions: any) => {
          
          return actions.order.capture().then((orderData : any) => {
            // Successful capture! For dev/demo purposes:
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            const transaction = orderData;

            this.confirmed= confirm(`Transaction ${transaction.status}: ${transaction.id}`);
            console.log('transaction id : ' ,orderData.id);
            console.log('capture id : ', orderData.purchase_units[0].payments.captures[0].id);
            console.log('transaction amount : ', orderData.purchase_units[0].amount.value);
            this.transactionId = orderData.id;
            this.captureId = orderData.purchase_units[0].payments.captures[0].id;
            this.transactionAmount = orderData.purchase_units[0].amount.value
            this.approved = true
            this.paymentApproved.emit({
              approved : this.approved,
              transactionId: this.transactionId,
              transactionAmount: this.transactionAmount
            })
         

          });
          
        },  
      }
    ).render(this.paypal.nativeElement);

  }
    
}