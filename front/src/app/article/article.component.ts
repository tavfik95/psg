import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActualiteService } from '../service/actualite/actualite.service';
import { Article } from '../model/article-model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article$ !: Observable<Article>

  constructor(private ActualiteService:ActualiteService,
              private route : ActivatedRoute,
              private router : Router) {
    
   }

  ngOnInit(): void {
    const articleId = +this.route.snapshot.params['id']
    this.article$ = this.ActualiteService.getArticleById(articleId)
    this.article$.subscribe({
      next:(value)=> {
        console.log(value);
    
      }
  })

}

  actualite(){
    this.router.navigateByUrl('actualite')    

  }
}
