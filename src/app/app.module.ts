import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClubComponent } from './components/club/club.component';
import { ClWinnersComponent } from './components/international/cl-winners/cl-winners.component';

import { MatTableModule } from '@angular/material/table';
import { InternationalComponent } from './components/international/international.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    ClWinnersComponent,
    InternationalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
