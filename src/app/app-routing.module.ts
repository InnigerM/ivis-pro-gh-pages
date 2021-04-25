import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomesticComponent } from './components/domestic/domestic.component';
import { InternationalComponent } from './components/international/international.component';

const routes: Routes = [
  { path: 'international', component: InternationalComponent },
  { path: 'domestic', component: DomesticComponent },
  { path: '**', component: InternationalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
