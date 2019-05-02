import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuropeanCountriesComponent } from './european-countries/european-countries.component';
import {EuropeRoutingModule} from './europe-routing.module';

@NgModule({
  declarations: [EuropeanCountriesComponent],
  imports: [
    CommonModule,
    EuropeRoutingModule
  ]
})
export class EuropeModule { }
