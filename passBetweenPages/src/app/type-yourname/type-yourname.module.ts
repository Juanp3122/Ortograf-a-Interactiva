import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TypeYournamePageRoutingModule } from './type-yourname-routing.module';

import { TypeYournamePage } from './type-yourname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TypeYournamePageRoutingModule
  ],
  declarations: [TypeYournamePage]
})
export class TypeYournamePageModule {}
