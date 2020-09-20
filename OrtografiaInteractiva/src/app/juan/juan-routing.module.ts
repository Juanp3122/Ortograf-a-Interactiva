import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuanPage } from './juan.page';

const routes: Routes = [
  {
    path: '',
    component: JuanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuanPageRoutingModule {}
