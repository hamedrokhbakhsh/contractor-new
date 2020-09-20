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
        loadChildren: () => import('../full-reception/full-reception.module').then(value => value.FullReceptionPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('../detail-reception/detail-reception.module').then( m => m.DetailReceptionPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultPageRoutingModule {}
