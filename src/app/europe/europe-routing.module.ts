import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EuropeanCountriesComponent} from './european-countries/european-countries.component';


const routes: Routes = [
  {
    path: '', component: EuropeanCountriesComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropeRoutingModule {
}

