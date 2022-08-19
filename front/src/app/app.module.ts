import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { EffectifComponent } from './effectif/effectif.component';
import { PalmaresComponent } from './palmares/palmares.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { ProduitComponent } from './produit/produit.component';
import { InfoClientComponent } from './info-client/info-client.component';
import { SummaryComponent } from './summary/summary.component';
import { ShopComponent } from './shop/shop.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentApprovedComponent } from './payment-approved/payment-approved.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FicheJoueurComponent } from './fiche-joueur/fiche-joueur.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitListHommeComponent } from './produit-list-homme/produit-list-homme.component';
import { ProduitListFemmeComponent } from './produit-list-femme/produit-list-femme.component';
import { ProduitListEnfantComponent } from './produit-list-enfant/produit-list-enfant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    ActualiteComponent,
    EffectifComponent,
    PalmaresComponent,
    BoutiqueComponent,
    JoueursComponent,
    ProduitComponent,
    InfoClientComponent,
    SummaryComponent,
    ShopComponent,
    PaymentComponent,
    PaymentApprovedComponent,
    ArticleListComponent,
    FicheJoueurComponent,
    ArticleComponent,
    FooterComponent,
    ProduitListHommeComponent,
    ProduitListFemmeComponent,
    ProduitListEnfantComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
