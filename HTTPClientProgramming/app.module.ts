import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyserviceService } from './myservice.service';//importing my service
import { InventoryComponent } from './inventory/inventory.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component'; //added new component
import { HttpclientComponent } from './httpclient/httpclient.component'//added httpclient
import {HttpClientModule} from '@angular/common/http'
import { HttpclientService } from './httpclient.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    ContactComponent,
    PageNotFoundComponent,
    InventoryComponent,
    NewCmpComponent,//added new component
    HttpclientComponent//added http client
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  //providers: [MyserviceService],//adding MyserviceService as the providers
  providers: [HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
