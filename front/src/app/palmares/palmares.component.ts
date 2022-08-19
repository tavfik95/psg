import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PalmaresService } from '../service/palmares/palmares.service';

@Component({
  selector: 'app-palmares',
  templateUrl: './palmares.component.html',
  styleUrls: ['./palmares.component.css']
})
export class PalmaresComponent implements OnInit {

  ligueUn$ !: Observable<any>
  coupeDeFrance$ !: Observable<any>
  coupeDeLaLigue$ !: Observable<any>
  tropheesDesChampions$ !: Observable<any>
  coupeDesCoupes$ !: Observable<any>

  constructor(private PalmaresService:PalmaresService,
              private router : Router){ }

  ngOnInit(): void {
    this.ligueUn$ = this.PalmaresService.getLigueUn()
    this.coupeDeFrance$ = this.PalmaresService.getCoupeDeFrance()
    this.coupeDeLaLigue$ = this.PalmaresService.getCoupeDeLaLigue()
    this.tropheesDesChampions$ = this.PalmaresService.getTropheesDesChampions()
    this.coupeDesCoupes$ = this.PalmaresService.getCoupeDesCoupes()
  }

  home(){
    this.router.navigateByUrl('home')    

  }

}
