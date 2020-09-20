import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuanPageRoutingModule } from './juan-routing.module';

import { JuanPage } from './juan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuanPageRoutingModule
  ],
  declarations: [JuanPage]
})
export class JuanPageModule {}
