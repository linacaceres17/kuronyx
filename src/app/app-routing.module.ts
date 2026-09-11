import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothespageComponent } from './clothespage/clothespage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'clothes/:id', component: ClothespageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'blogs', component: BlogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
