import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomaPageRoutingModule } from './diploma-routing.module';

import { DiplomaPage } from './diploma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomaPageRoutingModule
  ],
  declarations: [DiplomaPage]
})
export class DiplomaPageModule {}
