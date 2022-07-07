import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { AuthProfile } from '../auth.model';

export interface AuthState {
  token: string;
  refreshToken: string;
  profile: AuthProfile;
}

export function createInitialState(): AuthState {
  return {
    token: null,
    refreshToken: null,
    profile: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'admin-data-access-auth', resettable: true })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }

  setToken(token: string) {
    const state = this.getValue();

    this.update({
      ...state,
      token,
    });
  }

  setRefreshToken(refreshToken: string) {
    const state = this.getValue();

    this.update({
      ...state,
      refreshToken,
    });
  }

  setProfile(profile: AuthProfile) {
    const state = this.getValue();

    this.update({
      ...state,
      profile,
    });
  }
}
