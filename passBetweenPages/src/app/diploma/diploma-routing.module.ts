import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomaPage } from './diploma.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomaPageRoutingModule {}
