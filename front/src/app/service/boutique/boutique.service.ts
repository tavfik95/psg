import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BackendService } from '../backend/backend.service';
import { Produit } from 'src/app/model/produit-model';
import { ProductData } from 'src/app/produit/produit.component';
import { ContactData } from 'src/app/info-client/info-client.component';


export interface BoutiqueInterface{
  photo: string,
  price : string,
  shortDescription : string,
}


@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
    
  constructor(private httpClient: HttpClient, private backend:BackendService) { }

    getProductEnfantList(): Observable<BoutiqueInterface>{
      return this.httpClient.get<BoutiqueInterface>(this.backend.getEndpoint('/boutique/enfant'))
    };
    getProductEnfantById(produitId: number): Observable<Produit> {
      return this.httpClient.get<Produit>(this.backend.getEndpoint(`/produit/enfant/${produitId}`))
    }
    getProductFemmeList(): Observable<BoutiqueInterface>{
      return this.httpClient.get<BoutiqueInterface>(this.backend.getEndpoint('/boutique/femme'))
    };
    getProductFemmeById(produitId: number): Observable<Produit> {
      return this.httpClient.get<Produit>(this.backend.getEndpoint(`/produit/femme/${produitId}`))
    }
    getProductHommeList(): Observable<BoutiqueInterface>{
      return this.httpClient.get<BoutiqueInterface>(this.backend.getEndpoint('/boutique/homme'))
    };
    getProductHommeById(produitId: number): Observable<Produit> {
      return this.httpClient.get<Produit>(this.backend.getEndpoint(`/produit/homme/${produitId}`))
    }

    addOrder(data : any): Observable<unknown>{
      console.log('ok');
      
      return this.httpClient.post<any>(this.backend.getEndpoint('/addOrder/'), JSON.stringify(data), {
        headers: new HttpHeaders({'Content-type':'application/json' ,})
      }).pipe(
        tap((data) => { console.log(data); return of(data); }),
      );
    }
    

    getProducts(){
      return this.productList.asObservable();
    }
    addtoCart(product : any){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    
    }

 
}


