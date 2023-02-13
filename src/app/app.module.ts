import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Modulo personalizado de PrimeNg
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
