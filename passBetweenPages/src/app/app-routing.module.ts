import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'type-yourname',
    loadChildren: () => import('./type-yourname/type-yourname.module').then( m => m.TypeYournamePageModule)
    
  },
  {
    path: '',
    redirectTo: 'type-yourname',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'teoria',
    loadChildren: () => import('./teoria/teoria.module').then( m => m.TeoriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
