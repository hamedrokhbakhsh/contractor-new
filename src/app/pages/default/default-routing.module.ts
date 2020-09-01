import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultPage } from './default.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultPage ,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(value => value.HomePageModule)
      },
      {
        path: 'full',
        loadChildren: () => import('../full-reception/full-reception-routing.module').then(value => value.FullReceptionPageRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultPageRoutingModule {}
