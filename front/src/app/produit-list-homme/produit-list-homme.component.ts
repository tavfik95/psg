import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from '../service/boutique/boutique.service';
import { Produit } from '../model/produit-model';

@Component({
  selector: 'app-produit-list-homme',
  templateUrl: './produit-list-homme.component.html',
  styleUrls: ['./produit-list-homme.component.css']
})
export class ProduitListHommeComponent implements OnInit {

  @Input() produit:Produit = {
    id : 0,
    photoUrl : "",
    price : "",
    shortDescription : "",
    description : "",
    details : "",
    enfant : false,
    femme : false, 
    homme : true,
    categorie: " ",
    
  }

  constructor(private boutiqueService : BoutiqueService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onView(){
    this.router.navigateByUrl(`produit/homme/${this.produit.id}`);
  }
}
