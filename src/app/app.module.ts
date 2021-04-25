import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InternationalComponent } from './components/international/international.component';
import { ClWinnersComponent } from './components/international/cl-winners/cl-winners.component';
import { DomesticComponent } from './components/domestic/domestic.component';
import { LeagueWinnersComponent } from './components/domestic/league-winners/league-winners.component';

import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ClWinnersComponent,
    InternationalComponent,
    DomesticComponent,
    LeagueWinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
