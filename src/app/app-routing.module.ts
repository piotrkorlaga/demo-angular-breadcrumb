import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: '/africa', pathMatch: 'full'},
      {
        path: 'africa',
        loadChildren: 'src/app/africa/africa.module#AfricaModule',
        data: {
          breadcrumb: 'Africa'
        }
      },
      {
        path: 'europe',
        loadChildren: 'src/app/europe/europe.module#EuropeModule',
        data: {
          breadcrumb: 'Europe'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

