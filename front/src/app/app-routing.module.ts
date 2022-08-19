import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { EffectifComponent } from './effectif/effectif.component';
import { FicheJoueurComponent } from './fiche-joueur/fiche-joueur.component';
import { HomeComponent } from './home/home.component';
import { InfoClientComponent } from './info-client/info-client.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PalmaresComponent } from './palmares/palmares.component';
import { PaymentComponent } from './payment/payment.component';
import { ProduitComponent } from './produit/produit.component';
import { ShopComponent } from './shop/shop.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'actualite', component: ActualiteComponent},
  {path: 'articles', component : ArticleListComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'effectif', component: EffectifComponent},
  {path: 'joueur/:id', component:FicheJoueurComponent},
  {path: 'palmares', component: PalmaresComponent},
  {path: 'boutique', component: BoutiqueComponent},
  {path : 'produit/enfant/:id', component: ShopComponent},
  {path : 'produit/femme/:id', component: ShopComponent},
  {path : 'produit/homme/:id', component: ShopComponent},
  {path : 'contact', component: InfoClientComponent},
  {path : 'summary', component: SummaryComponent},
  {path : 'payment', component: PaymentComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
