import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimesComponent } from './components/primes/primes.component';
import { PairsComponent } from './components/pairs/pairs.component';
import { PrimesDBComponent } from './components/primes-db/primes-db.component';
import { PairsDBComponent } from './components/pairs-db/pairs-db.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimesComponent,
    PairsComponent,
    PrimesDBComponent,
    PairsDBComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
