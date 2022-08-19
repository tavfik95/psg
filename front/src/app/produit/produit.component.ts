import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoutiqueService } from '../service/boutique/boutique.service';
import { ChoixBoutique } from '../boutique/boutique.component';
import { Produit } from '../model/produit-model';


export interface ProductData {
  photo : string,
  shortDescription : string,
  price : number,
  quantity : number,
  sousTotal : number,
  total : number,
  size : number,
  nomPersonnalisation : string,
  numeroPersonnalisation : string,
  productIsSubmitted:boolean,
}



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() isOpenLivraison: boolean = false;
  @Input() isOpenDetails: boolean = false;
  @Input() isOpenDescription: boolean = false;
  @Input() isOpenPersonalisation: boolean = false;
  @Input() productIsSubmitted: boolean = false;
  @Input() quantity : number = 0;
  @Input() produit:Produit = {
    id : 0,
    photoUrl : "",
    price : "",
    shortDescription : "",
    description : "",
    details : "",
    enfant : false,
    femme : false, 
    homme : false,  
    categorie: " ",
  }

  @Input() choixBoutique !: ChoixBoutique 

  produitEnfant$ !: Observable<Produit>
  produitFemme$ !:Observable<Produit>
  produitHomme$ !:Observable<Produit>
  @Output() productDatas = new EventEmitter<ProductData>()


  formGroup!: FormGroup;
  controlSize = new FormControl(0);
  controlQuantity = new FormControl(0);
  controlNomPersonnalisation = new FormControl('');
  controlNumeroPersonnalisation = new FormControl('');

  product !: ProductData
  photo: string=""
  price : number=0 
  shortDescription : string = ""
  nomPersonnalisation : string=""
  numeroPersonnalisation : string=""
  femme : boolean = false
  homme : boolean = false
  
  openTxtLivraison(){   
    this.isOpenLivraison=(!this.isOpenLivraison)    
  }

  openTxtDetails(){   
    this.isOpenDetails=(!this.isOpenDetails) 
  }

  openTxtDescription(){   
    this.isOpenDescription=(!this.isOpenDescription) 
  }

  openPersonalisation(){
    this.isOpenPersonalisation=(!this.isOpenPersonalisation)
    this.price = this.price + 10
     
  }

  decrement(){
    if (this.controlQuantity.value == 0){
      this.controlQuantity.setValue(0);

    }else{
      this.controlQuantity.setValue(this.controlQuantity.value-1)
      }
  }

  increment(){
    this.controlQuantity.setValue(this.controlQuantity.value+1)
  }

  constructor(
    public router : Router, 
    private BoutiqueService:BoutiqueService,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,

    

  ) {
    this.formGroup = formBuilder.group({
      size: this.controlSize,
      quantity: this.controlQuantity,
      nomPersonnalisation:this.controlNomPersonnalisation,
      numeroPersonnalisation:this.controlNumeroPersonnalisation
    }); 
   }

  ngOnInit() {

    
    const produitEnfantId = +this.route.snapshot.params['id']
    this.produitEnfant$ = this.BoutiqueService.getProductEnfantById(produitEnfantId)
    this.produitEnfant$.subscribe({
      next:(value)=> {
    this.photo = (value).photoUrl
    this.shortDescription = (value).shortDescription
    this.price = Number((value).price)
            
      }
    })

    const produitFemmeId = +this.route.snapshot.params['id']
    this.produitFemme$ = this.BoutiqueService.getProductFemmeById(produitFemmeId)
    this.produitFemme$.subscribe({
      next:(value)=> {
    this.photo = (value).photoUrl
    this.shortDescription = (value).shortDescription
    this.price = Number((value).price)

    
      }
    })

    const produitHommeId = +this.route.snapshot.params['id']
    this.produitHomme$ = this.BoutiqueService.getProductHommeById(produitHommeId)
    this.produitHomme$.subscribe({
      next:(value)=> {
    this.photo = (value).photoUrl
    this.shortDescription = (value).shortDescription
    this.price = Number((value).price)
    
      }
    })   

    
  }

  onBack(){
    this.router.navigateByUrl('boutique')    
  }

  onSubmit(){
    this.productIsSubmitted = true;
    this.productDatas.emit({
      photo : this.photo,
      shortDescription : this.shortDescription,
      price :  this.price,
      quantity : this.controlQuantity.value,
      sousTotal : this.price * this.controlQuantity.value,
      total : this.price * this.controlQuantity.value,
      size : this.controlSize.value,
      nomPersonnalisation : this.controlNomPersonnalisation.value,
      numeroPersonnalisation : this.controlNumeroPersonnalisation.value,
      productIsSubmitted : this.productIsSubmitted
    })    
  }

  addtocart(item: any){
    this.BoutiqueService.addtoCart(item);
  }
  
  
}
