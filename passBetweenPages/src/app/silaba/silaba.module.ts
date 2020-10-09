import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SilabaPageRoutingModule } from './silaba-routing.module';

import { SilabaPage } from './silaba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SilabaPageRoutingModule
  ],
  declarations: [SilabaPage]
})
export class SilabaPageModule {}
