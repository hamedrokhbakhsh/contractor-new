import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailReceptionPage } from './detail-reception.page';

const routes: Routes = [
  {
    path: '',
    component: DetailReceptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailReceptionPageRoutingModule {}
