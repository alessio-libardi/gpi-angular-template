import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { AuthorizationHeaderInterceptor } from './interceptors/authorization-header.interceptor';
import { preloadProfile, ProfileProvider } from './providers/profile.provider';

@NgModule()
export class AdminUtilAuthModule {
  static forRoot(): ModuleWithProviders<AdminUtilAuthModule> {
    return {
      ngModule: AdminUtilAuthModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthorizationHeaderInterceptor,
          multi: true,
        },

        ProfileProvider,
        {
          provide: APP_INITIALIZER,
          multi: true,
          useFactory: preloadProfile,
          deps: [ProfileProvider],
        },
      ],
    };
  }
}
