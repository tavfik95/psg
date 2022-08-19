import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EffectifService } from '../service/effectif/effectif.service';
import { Joueurs } from '../model/joueur-model';


@Component({
  selector: 'app-effectif',
  templateUrl: './effectif.component.html',
  styleUrls: ['./effectif.component.css']
})
export class EffectifComponent implements OnInit {
  
  // gardien$ !: Observable<any>
  // defenseur$ !: Observable<any>
  // milieu$ !: Observable<any>
  // attaquant$ !: Observable<any>
  @Input() joueur!:Joueurs
  joueur$ !: Observable<any>

  
  constructor(
              private EffectifService : EffectifService,
              private router : Router

  ) { }

  ngOnInit(): void {

    this.joueur$ = this.EffectifService.getJoueurs()
  }

  home(){
    this.router.navigateByUrl('home')    

  }

}
