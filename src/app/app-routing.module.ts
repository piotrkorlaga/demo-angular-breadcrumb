import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: 'src/app/home/home.module#HomeModule'
      },
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

