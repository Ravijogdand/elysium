import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatComponent } from "./contact.component";
import { AttributedirectivesComponent } from './attributedirectives/attributedirectives.component';
@NgModule({
  declarations: [
    AppComponent,
    ContatComponent,
    AttributedirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
