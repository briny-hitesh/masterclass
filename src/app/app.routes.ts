import { Routes } from '@angular/router';
import { canActivateFunction } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('@pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then( m => m.TabRoutes),
    canActivate: [canActivateFunction]
  },
];
