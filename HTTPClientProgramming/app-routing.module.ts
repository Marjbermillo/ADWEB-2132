import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes:Routes = [{path:'home', component:HomeComponent},
                      {path:'about', component:AboutComponent},
                      {path:'product', component:ProductComponent},
                      {path:'product-details', component:ProductDetailsComponent},
                      {path:'contact',component:ContactComponent},
                      {path:'**', component:PageNotFoundComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
