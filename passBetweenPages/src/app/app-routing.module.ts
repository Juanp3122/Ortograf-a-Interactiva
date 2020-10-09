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
  },  {
    path: 'actividades',
    loadChildren: () => import('./actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'puntaje',
    loadChildren: () => import('./puntaje/puntaje.module').then( m => m.PuntajePageModule)
  },
  {
    path: 'actualizaciones',
    loadChildren: () => import('./actualizaciones/actualizaciones.module').then( m => m.ActualizacionesPageModule)
  },
  {
    path: 'diploma',
    loadChildren: () => import('./diploma/diploma.module').then( m => m.DiplomaPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'tipo-acento',
    loadChildren: () => import('./tipo-acento/tipo-acento.module').then( m => m.TipoAcentoPageModule)
  },
  {
    path: 'fonemas',
    loadChildren: () => import('./fonemas/fonemas.module').then( m => m.FonemasPageModule)
  },
  {
    path: 'silaba',
    loadChildren: () => import('./silaba/silaba.module').then( m => m.SilabaPageModule)
  },
  {
    path: 'signos-puntuacion',
    loadChildren: () => import('./signos-puntuacion/signos-puntuacion.module').then( m => m.SignosPuntuacionPageModule)
  },
  {
    path: 'mayusculas',
    loadChildren: () => import('./mayusculas/mayusculas.module').then( m => m.MayusculasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
