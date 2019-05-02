import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AfricanCountriesComponent} from './african-countries/african-countries.component';
import {NigeriaComponent} from './nigeria/nigeria.component';
import {EgyptComponent} from './egypt/egypt.component';
import {CairoComponent} from './egypt/cairo/cairo.component';
import {GizaComponent} from './egypt/giza/giza.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'African countries list'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: AfricanCountriesComponent,
      },
      {
        path: 'nigeria',
        data: {
          breadcrumb: 'Nigeria'
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
            component: NigeriaComponent,
          }
        ],
      },
      {
        path: 'egypt',
        data: {
          breadcrumb: 'Egypt'
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
            component: EgyptComponent,
          },
          {
            path: 'cairo',
            data: {
              breadcrumb: 'Cairo'
            },
            component: CairoComponent,
          },
          {
            path: 'giza',
            data: {
              breadcrumb: 'Giza'
            },
            component: GizaComponent,
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
export class AfricaRoutingModule {
}

