import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayusculasPageRoutingModule } from './mayusculas-routing.module';

import { MayusculasPage } from './mayusculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayusculasPageRoutingModule
  ],
  declarations: [MayusculasPage]
})
export class MayusculasPageModule {}
