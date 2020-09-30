import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizacionesPage } from './actualizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizacionesPageRoutingModule {}
