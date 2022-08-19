import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EffectifService } from '../service/effectif/effectif.service';
import { Joueurs } from '../model/joueur-model';

@Component({
  selector: 'app-fiche-joueur',
  templateUrl: './fiche-joueur.component.html',
  styleUrls: ['./fiche-joueur.component.css']
})
export class FicheJoueurComponent implements OnInit {
  joueurs$ !: Observable<any>
  
  entete : string = ""
  firstName : string = ""
  lastName : string = ""
  body : string = ""
  footer : string = ""


  constructor(private EffectifService : EffectifService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    const joueurId = +this.route.snapshot.params['id']
    this.joueurs$ = this.EffectifService.getJoueurById(joueurId)
    

    this.joueurs$.subscribe({
      next:(value)=> {
        this.entete = value.entete
        this.lastName = value.lastName
        this.firstName = value.firstName
        this.body = value.body
        this.footer = value.footer
        
      }
    })
    
  }

  effectif(){
    this.router.navigateByUrl('effectif')    

  }
}
