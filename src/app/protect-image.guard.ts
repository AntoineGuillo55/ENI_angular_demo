import { CanActivateFn } from '@angular/router';

export const protectImageGuard: CanActivateFn = (route, state) => {
  return true;
};
