import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GradebookComponent } from './gradebook/gradebook.component'; //import forms angular
//what evever you input here... you need to put it on the import

@NgModule({
  declarations: [
    AppComponent,
    GradebookComponent
  ],
  imports: [ // you need place it here (Forms Module)
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
