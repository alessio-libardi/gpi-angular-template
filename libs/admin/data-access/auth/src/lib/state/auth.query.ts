import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  constructor(protected store: AuthStore) {
    super(store);
  }

  isAuthenticated(): Observable<boolean> {
    return this.selectToken().pipe(map((profile) => !!profile));
  }

  isAuthorized(roles: string[]): Observable<boolean> {
    return this.selectProfile().pipe(
      map((profile) => {
        let authorized = false;

        if (profile && profile.role) {
          const hasRole = roles.some((role) => role === profile.role);

          if (hasRole) {
            authorized = true;
          }
        }

        return authorized;
      }),
    );
  }

  selectToken() {
    return this.select('token');
  }

  selectRefreshToken() {
    return this.select('refreshToken');
  }

  selectProfile() {
    return this.select('profile');
  }
}
