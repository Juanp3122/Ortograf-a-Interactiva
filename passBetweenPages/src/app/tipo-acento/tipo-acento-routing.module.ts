import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAcentoPage } from './tipo-acento.page';

const routes: Routes = [
  {
    path: '',
    component: TipoAcentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAcentoPageRoutingModule {}
