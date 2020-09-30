import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizacionesPageRoutingModule } from './actualizaciones-routing.module';

import { ActualizacionesPage } from './actualizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizacionesPageRoutingModule
  ],
  declarations: [ActualizacionesPage]
})
export class ActualizacionesPageModule {}
