import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from '../service/boutique/boutique.service';
import { Produit } from '../model/produit-model';

@Component({
  selector: 'app-produit-list-femme',
  templateUrl: './produit-list-femme.component.html',
  styleUrls: ['./produit-list-femme.component.css']
})
export class ProduitListFemmeComponent implements OnInit {


  @Input() produit:Produit = {
    id : 0,
    photoUrl : "",
    price : "",
    shortDescription : "",
    description : "",
    details : "",
    enfant : false,
    femme : true, 
    homme : false,
    categorie: " ",
    
  }

  constructor(private boutiqueService : BoutiqueService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onView(){
    this.router.navigateByUrl(`produit/femme/${this.produit.id}`);
  }
}
