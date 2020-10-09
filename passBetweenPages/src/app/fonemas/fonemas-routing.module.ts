import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FonemasPage } from './fonemas.page';

const routes: Routes = [
  {
    path: '',
    component: FonemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FonemasPageRoutingModule {}
