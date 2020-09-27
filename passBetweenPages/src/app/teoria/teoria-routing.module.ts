import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeoriaPage } from './teoria.page';

const routes: Routes = [
  {
    path: '',
    component: TeoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeoriaPageRoutingModule {}
