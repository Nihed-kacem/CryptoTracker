import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'Litecoin',
    loadChildren: () => import('./home/litecoin/litecoin-module.module').then( m => m.LitecoinModuleModule)
  },
  {
    path: 'Ethereum',
    loadChildren: () => import('./home/ethereum/ethereum.module').then( m => m.EthereumModule)
  },

  {
    path: 'xrp',
    loadChildren: () => import('./home/xrp/xrp.module').then( m => m.XrpModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
