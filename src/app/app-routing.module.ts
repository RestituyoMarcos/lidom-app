import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lidom/noticia/:id',
    loadChildren: () => import('./noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'lidom/equipo/:id',
    loadChildren: () => import('./equipo/equipo.module').then( m => m.EquipoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
