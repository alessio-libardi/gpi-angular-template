import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AdminUtilEnvironment, ADMIN_UTIL_ENVIRONMENT } from '@gpi/admin/util/environment';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthProfile,
} from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthBackend {
  constructor(
    private httpClient: HttpClient,
    @Inject(ADMIN_UTIL_ENVIRONMENT) private environment: AdminUtilEnvironment,
  ) { }

  login(body: AuthLoginRequest): Observable<AuthLoginResponse> {
    return of({
      token: 'token',
      refresh_token: 'refreshToken',
    });
  }

  getProfile() {
    return of({
      name: 'Name',
      username: 'Username',
      role: 'admin'
    });
  }
}
