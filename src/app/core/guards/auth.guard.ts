import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateFunction: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  router.navigate(['/']);
  return false;
}