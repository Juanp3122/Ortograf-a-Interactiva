import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadAudioPage } from './actividad-audio.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadAudioPageRoutingModule {}
