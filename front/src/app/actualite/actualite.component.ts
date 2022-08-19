import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActualiteService } from '../service/actualite/actualite.service';
import { Produit } from '../model/produit-model';
import { Article } from '../model/article-model';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  @Input() article!:Article
  articles$ !: Observable<any>
  
  constructor(private ActualiteService:ActualiteService,
              private router : Router,
              private route : ActivatedRoute) { }



  ngOnInit(){
    this.articles$ = this.ActualiteService.getArticleList() 
  }

  home(){
    this.router.navigateByUrl('home')    

  }
}
