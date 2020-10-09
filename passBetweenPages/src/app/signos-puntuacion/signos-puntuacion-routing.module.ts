import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignosPuntuacionPage } from './signos-puntuacion.page';

const routes: Routes = [
  {
    path: '',
    component: SignosPuntuacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignosPuntuacionPageRoutingModule {}
