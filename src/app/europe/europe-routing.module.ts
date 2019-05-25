import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EuropeanCountriesComponent} from './european-countries/european-countries.component';
import {GermanyComponent} from './germany/germany.component';
import {BerlinComponent} from './germany/berlin/berlin.component';
import {HamburgComponent} from './germany/hambrug/hamburg.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Europe'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: EuropeanCountriesComponent,
      },
      {
        path: 'germany',
        data: {
          breadcrumb: 'Germany'
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
            component: GermanyComponent,
          },
          {
            path: 'berlin',
            data: {
              breadcrumb: 'Berlin'
            },
            component: BerlinComponent,
          },
          {
            path: 'hamburg',
            data: {
              breadcrumb: 'Hamburg'
            },
            component: HamburgComponent,
          },
        ],
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropeRoutingModule {
}

