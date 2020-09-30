import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntajePageRoutingModule } from './puntaje-routing.module';

import { PuntajePage } from './puntaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntajePageRoutingModule
  ],
  declarations: [PuntajePage]
})
export class PuntajePageModule {}
