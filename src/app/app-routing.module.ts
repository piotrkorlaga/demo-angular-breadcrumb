import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: '/africa', pathMatch: 'full'},
      {
        path: 'africa',
        loadChildren: 'src/app/africa/africa.module#AfricaModule'
      },
      {
        path: 'europe',
        loadChildren: 'src/app/europe/europe.module#EuropeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

