import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, finalize, first, tap } from 'rxjs/operators';

import { AuthBackend } from '../auth.backend';
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthProfile,
} from '../auth.model';

import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    public query: AuthQuery,
    public store: AuthStore,
    private backend: AuthBackend,
  ) { }

  login(args: AuthLoginRequest): Observable<AuthLoginResponse> {
    this.store.setLoading(true);

    return this.backend.login(args).pipe(
      tap((auth) => {
        this.store.setToken(auth.token);
        this.store.setRefreshToken(auth.refresh_token);
      }),
      catchError((err, caught) => {
        this.store.setError(err);

        return [err, caught];
      }),
      finalize(() => {
        this.store.setLoading(false);
      }),
    );
  }

  logout(): Observable<void> {
    return of(null).pipe(
      first(),
      tap(() => this.store.reset()),
    );
  }

  getProfile(): Observable<AuthProfile> {
    this.store.setLoading(true);

    return this.backend.getProfile().pipe(
      tap((profile) => {
        this.store.setProfile(profile);
      }),
      catchError((err, caught) => {
        this.store.setError(err);

        return [err, caught];
      }),
      finalize(() => {
        this.store.setLoading(false);
      }),
    );
  }
}
