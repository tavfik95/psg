import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BackendService } from '../backend/backend.service';
import { Joueurs } from 'src/app/model/joueur-model';

@Injectable({
  providedIn: 'root'
})
export class EffectifService {
  constructor(private httpClient: HttpClient, private backend:BackendService) { }

    getJoueurs(): Observable<Joueurs>{
      return this.httpClient.get<Joueurs>(this.backend.getEndpoint('/joueurs/'))
    };

    getJoueurById(joueurId: number): Observable<Joueurs> {
      return this.httpClient.get<Joueurs>(this.backend.getEndpoint(`/joueur/${joueurId}`))
  }

    
 
}

