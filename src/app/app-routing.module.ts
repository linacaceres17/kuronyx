import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothespageComponent } from './clothespage/clothespage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'clothes/:id', component:ClothespageComponent},
  {path:'cart-page',component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
