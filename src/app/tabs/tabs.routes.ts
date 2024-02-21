import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ROUTES } from '@core/constants/routes.constant';

export const TabRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: ROUTES.HOME,
        loadComponent: () => import('@pages/home/home.page').then(p => p.HomePage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];