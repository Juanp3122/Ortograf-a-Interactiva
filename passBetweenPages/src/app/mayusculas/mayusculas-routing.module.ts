import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayusculasPage } from './mayusculas.page';

const routes: Routes = [
  {
    path: '',
    component: MayusculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayusculasPageRoutingModule {}
