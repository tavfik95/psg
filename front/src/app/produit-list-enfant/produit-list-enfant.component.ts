import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from '../service/boutique/boutique.service';
import { Produit } from '../model/produit-model';


@Component({
  selector: 'app-produit-list-enfant',
  templateUrl: './produit-list-enfant.component.html',
  styleUrls: ['./produit-list-enfant.component.css']
})
export class ProduitListEnfantComponent implements OnInit {

  @Input() produit:Produit = {
    id : 0,
    photoUrl : "",
    price : "",
    shortDescription : "",
    description : "",
    details : "",
    enfant : true,
    femme : false, 
    homme : false,
    categorie: "",
    
  }


constructor(private boutiqueService : BoutiqueService,
            private router : Router) {}
  ngOnInit(): void {
    
    
  }

onView(){
  this.produit.enfant = true
  this.router.navigateByUrl(`produit/enfant/${this.produit.id}`);
}

}
