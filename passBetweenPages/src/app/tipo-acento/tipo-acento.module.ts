import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAcentoPageRoutingModule } from './tipo-acento-routing.module';

import { TipoAcentoPage } from './tipo-acento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAcentoPageRoutingModule
  ],
  declarations: [TipoAcentoPage]
})
export class TipoAcentoPageModule {}
