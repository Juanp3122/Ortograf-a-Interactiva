import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeYournamePage } from './type-yourname.page';

const routes: Routes = [
  {
    path: '',
    component: TypeYournamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeYournamePageRoutingModule {}
