import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EffectifService } from '../service/effectif/effectif.service';
import { Joueurs } from '../model/joueur-model';


@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {

  @Input() joueur !: Joueurs;
  showNumber :boolean=false
  
  joueur$ !: Observable<any>
 
  
  constructor(private EffectifService:EffectifService,
              private router : Router) { 
            

  }

  ngOnInit(){
    
  }
  onView(){
    this.router.navigateByUrl(`joueur/${this.joueur.id}`);    
  }

  onShowNumber(){
    this.showNumber=true
  }

  onHideNumber(){
    this.showNumber=false
  }
}