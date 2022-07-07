import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@gpi/admin/data-access/auth';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import {
  AuthenticationGuardOptions,
  AUTHENTICATION_GUARD_OPTIONS_DEFAULT,
} from '../models/authentication-guard-options.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const options = this.getOptionsFromRoute(route);

    return this.can(options);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const options = this.getOptionsFromRoute(route);

    return this.can(options);
  }

  canLoad(route: Route): Observable<boolean | UrlTree> {
    const options = this.getOptionsFromRoute(route);

    return this.can(options);
  }

  private can(options: AuthenticationGuardOptions): Observable<boolean | UrlTree> {
    return this.authService.query.isAuthenticated().pipe(
      first(),
      map((isAuthenticated) =>
        isAuthenticated === options.authenticated ? true : this.router.parseUrl(options.redirectTo),
      ),
    );
  }

  private getOptionsFromRoute(route: ActivatedRouteSnapshot | Route): AuthenticationGuardOptions {
    return route.data.authenticationGuardOptions || AUTHENTICATION_GUARD_OPTIONS_DEFAULT;
  }
}
