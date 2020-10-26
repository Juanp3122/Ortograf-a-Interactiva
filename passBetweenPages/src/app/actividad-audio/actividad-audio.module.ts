import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadAudioPageRoutingModule } from './actividad-audio-routing.module';

import { ActividadAudioPage } from './actividad-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadAudioPageRoutingModule
  ],
  declarations: [ActividadAudioPage]
})
export class ActividadAudioPageModule {}
