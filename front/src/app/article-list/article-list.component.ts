import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualiteService } from '../service/actualite/actualite.service';
import { Article } from '../model/article-model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() article !: Article


  constructor(private actualiteService : ActualiteService,
              private router : Router) {}
    ngOnInit(): void {
    }
  
  onView(){
    this.router.navigateByUrl(`article/${this.article.id}`);
    console.log(this.article.id);
    
  
  }
  }