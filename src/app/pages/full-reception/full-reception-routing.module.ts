import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullReceptionPage } from './full-reception.page';

const routes: Routes = [
  {
    path: '',
    component: FullReceptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullReceptionPageRoutingModule {}
