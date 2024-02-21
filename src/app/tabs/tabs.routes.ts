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
        path: ROUTES.COURSES,
        loadComponent: () => import('@pages/courses/courses.page').then(p => p.CoursesPage)
      },
      {
        path: ROUTES.CHECKOUT,
        loadComponent: () => import('@pages/checkout/checkout.page').then(p => p.CheckoutPage)
      },
      {
        path: ROUTES.WISHLIST,
        loadComponent: () => import('@pages/wishlist/wishlist.page').then(p => p.WishlistPage)
      },
      {
        path: ROUTES.NOTIFICATIONS,
        loadComponent: () => import('@pages/notification/notification.page').then(p => p.NotificationPage)
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