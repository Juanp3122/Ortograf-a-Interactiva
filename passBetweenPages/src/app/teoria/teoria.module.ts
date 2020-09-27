import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeoriaPageRoutingModule } from './teoria-routing.module';

import { TeoriaPage } from './teoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeoriaPageRoutingModule
  ],
  declarations: [TeoriaPage]
})
export class TeoriaPageModule {}
