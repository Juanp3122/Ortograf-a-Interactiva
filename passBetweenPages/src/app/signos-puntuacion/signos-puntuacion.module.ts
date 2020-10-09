import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignosPuntuacionPageRoutingModule } from './signos-puntuacion-routing.module';

import { SignosPuntuacionPage } from './signos-puntuacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignosPuntuacionPageRoutingModule
  ],
  declarations: [SignosPuntuacionPage]
})
export class SignosPuntuacionPageModule {}
