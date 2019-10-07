import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ConfigService } from './services/config.service';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
    const username = localStorage.getItem('username');
    if (username) {
      return true;
    }
    this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
