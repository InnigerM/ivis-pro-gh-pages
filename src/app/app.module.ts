import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StatusBarComponent } from './components/status-bar/status-bar.component';

import { InternationalComponent } from './components/international/international.component';
import { ClWinnersComponent } from './components/international/cl-winners/cl-winners.component';
import { DomesticComponent } from './components/domestic/domestic.component';
import { LeagueWinnersComponent } from './components/domestic/league-winners/league-winners.component';

import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CountryStatsComponent } from './components/international/country-stats/country-stats.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { WorkloadComponent } from './components/domestic/workload/workload.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MarketValuesComponent } from './components/market-values/market-values.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    ClWinnersComponent,
    InternationalComponent,
    DomesticComponent,
    LeagueWinnersComponent,
    StatusBarComponent,
    CountryStatsComponent,
    WorkloadComponent,
    MarketValuesComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatProgressBarModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
