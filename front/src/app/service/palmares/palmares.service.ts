import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BackendService } from '../backend/backend.service';

export interface LigueUnInterface{
  annee : string,
  victoires : string,
  nuls : string,
  defaites : string,
  points : string
}

export interface CoupeInterface{
  annee : string,
  adversaire : string, 
  score : string,
}

@Injectable({
  providedIn: 'root'
})
export class PalmaresService {

  constructor(private httpClient: HttpClient, private backend:BackendService) { }
    getLigueUn(): Observable<LigueUnInterface>{
      return this.httpClient.get<LigueUnInterface>(this.backend.getEndpoint('/ligue1/'))
    };

    getCoupeDeFrance(): Observable<CoupeInterface>{
      return this.httpClient.get<CoupeInterface>(this.backend.getEndpoint('/coupe_de_france/'))
    };

    getCoupeDeLaLigue(): Observable<CoupeInterface>{
      return this.httpClient.get<CoupeInterface>(this.backend.getEndpoint('/coupe_de_la_ligue/'))
    };

    getTropheesDesChampions(): Observable<CoupeInterface>{
      return this.httpClient.get<CoupeInterface>(this.backend.getEndpoint('/trophees_des_champions/'))
    };

    getCoupeDesCoupes(): Observable<CoupeInterface>{
      return this.httpClient.get<CoupeInterface>(this.backend.getEndpoint('/coupe_des_coupes/'))
    };
}
