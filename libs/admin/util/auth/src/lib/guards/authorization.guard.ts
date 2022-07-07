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
  AuthorizationGuardOptions,
  AUTHORIZATION_GUARD_OPTIONS_DEFAULT,
} from '../models/authorization-guard-options.model';

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate, CanActivateChild, CanLoad {
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

  private can(options: AuthorizationGuardOptions): Observable<boolean | UrlTree> {
    return this.authService.query.isAuthorized(options.roles).pipe(
      first(),
      map((isAuthorized) =>
        isAuthorized === options.authorized ? true : this.router.parseUrl(options.redirectTo),
      ),
    );
  }

  private getOptionsFromRoute(route: ActivatedRouteSnapshot | Route): AuthorizationGuardOptions {
    return route.data.authorizationGuardOptions || AUTHORIZATION_GUARD_OPTIONS_DEFAULT;
  }
}
