import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SilabaPage } from './silaba.page';

const routes: Routes = [
  {
    path: '',
    component: SilabaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SilabaPageRoutingModule {}
