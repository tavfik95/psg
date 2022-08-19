import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BackendService } from '../backend/backend.service';
import { Article } from 'src/app/model/article-model';



@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  constructor(private httpClient: HttpClient, private backend:BackendService) { }
    getArticleList(): Observable<Article>{
    return this.httpClient.get<Article>(this.backend.getEndpoint('/articles/'))
  };

  getArticleById(articleId: number): Observable<Article> {
    return this.httpClient.get<Article>(this.backend.getEndpoint(`/article/${articleId}`))
}

}
