import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoutiqueService } from '../service/boutique/boutique.service';
import { Produit } from '../model/produit-model';

export interface ChoixBoutique {
  enfant : boolean,
  femme : boolean,
  homme : boolean,
}

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
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

  @Output() choixBoutique = new EventEmitter<ChoixBoutique>()

  produitsEnfant$ !: Observable<any>
  produitsFemme$ !: Observable<any>
  produitsHomme$ !: Observable<any>
 
  constructor(private BoutiqueService:BoutiqueService,
              private router : Router,
              private route : ActivatedRoute) { }



  ngOnInit(){
    this.produitsEnfant$ = this.BoutiqueService.getProductEnfantList() 
    this.produitsFemme$ = this.BoutiqueService.getProductFemmeList()
    this.produitsHomme$ = this.BoutiqueService.getProductHommeList()
    
  }

  onViewEnfant(){
    this.produit.enfant = true
    this.choixBoutique.emit({
      enfant : true,
      femme : false,
      homme : false,
    })

    
  }

  onViewFemme(){
    this.produit.femme = true

    

  }

  onViewHomme(){
    this.produit.homme = true
  }

  onBack(){
    this.produit.enfant=false
    this.produit.femme=false
    this.produit.homme=false  
    
  }

  home(){
    this.router.navigateByUrl('home')    

  }

}
