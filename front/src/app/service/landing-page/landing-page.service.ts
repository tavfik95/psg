import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, tap, of } from 'rxjs';
import { BackendService } from '../backend/backend.service';

export interface AddressMailInterface{
  address : string
  firstName : string
  lastName : string
}
@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  requestMaxRetry : number = 2;
  constructor(private httpClient: HttpClient, private backend:BackendService) { }
  addAddress(data:AddressMailInterface) : Observable<unknown>{
    console.log('ok');
    
    return this.httpClient.post<AddressMailInterface>(this.backend.getEndpoint('/addUser/'), JSON.stringify(data), {
      headers: new HttpHeaders({'Content-type':'application/json' ,})
    }).pipe(
      // retry(this.requestMaxRetry),
      tap((data) => { console.log(data); return of(data); }),
    );
  }
}
