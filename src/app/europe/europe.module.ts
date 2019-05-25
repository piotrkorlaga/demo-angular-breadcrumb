import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EuropeanCountriesComponent} from './european-countries/european-countries.component';
import {EuropeRoutingModule} from './europe-routing.module';
import {GermanyComponent} from './germany/germany.component';
import {BerlinComponent} from './germany/berlin/berlin.component';
import {HamburgComponent} from './germany/hambrug/hamburg.component';

@NgModule({
  declarations: [EuropeanCountriesComponent, GermanyComponent, BerlinComponent, HamburgComponent],
  imports: [
    CommonModule,
    EuropeRoutingModule
  ]
})
export class EuropeModule { }
