import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {StockComponent} from "./stock/stock.component";
import {Code404Component} from "./code404/code404.component";
import {BuyerListComponent} from "./buyer-list/buyer-list.component";
import {SellerListComponent} from "./seller-list/seller-list.component";
import {ConsultComponent} from './consult/consult.component';
import {PermissionGuard} from "./guard/permission.guard";
import {FocusGuard} from "./guard/focus.guard";
import {StockResolve} from './guard/stock.resolve';


const routes: Routes = [

  // redirect to the home page
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    // path: 'stock', // the first one
    path: 'stock/:id', // the second one
    component: StockComponent,
    data: [{isPro: true}], // the third one
    children: [
      {path: '', component: BuyerListComponent},
      {path: 'seller/:id', component: SellerListComponent}
    ],
    // canActivate: [PermissionGuard],
    // canDeactivate: [FocusGuard],
    resolve: {
      stock: StockResolve
    }
  },

  // define the auxiliary router
  {
    path: 'consult',
    component: ConsultComponent,
    outlet: 'aux'
  },

  {
    path: '**',
    component: Code404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


























