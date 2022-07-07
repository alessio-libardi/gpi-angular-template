import { Injectable } from '@angular/core';
import { AuthProfile, AuthService } from '@gpi/admin/data-access/auth';
import { of, Observable } from 'rxjs';
import { first, switchMapTo } from 'rxjs/operators';

@Injectable()
export class ProfileProvider {
  constructor(private authService: AuthService) { }

  load(): Promise<AuthProfile> {
    const authState = this.authService.query.getValue();
    const token = authState.token;

    let source: Observable<AuthProfile> = of(null);

    if (token) {
      source = this.authService.getProfile().pipe(
        switchMapTo(this.authService.query.selectProfile()),
        first(),
      );
    }

    return source.toPromise();
  }
}

export function preloadProfile(provider: ProfileProvider) {
  return () => provider.load();
}
