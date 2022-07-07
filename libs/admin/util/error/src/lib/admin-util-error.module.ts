import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';

import { AdminUtilErrorBackendErrorHandler } from './error-handlers/admin-util-error-backend.error-handler';
import { AdminUtilErrorFrontendErrorHandler } from './error-handlers/admin-util-error-frontend.error-handler';
import {
  AdminUtilErrorGlobalErrorHandler,
  ADMIN_UTIL_ERROR_HANDLERS,
} from './error-handlers/admin-util-error-global.error-handlers';
import { AdminUtilErrorInterceptor } from './interceptors/admin-util-error.interceptor';
import { AdminUtilErrorConfiguration } from './models/admin-util-error-configuration.interface';

@NgModule()
export class AdminUtilErrorModule {
  static forRoot(configuration: AdminUtilErrorConfiguration): ModuleWithProviders<AdminUtilErrorModule> {
    return {
      ngModule: AdminUtilErrorModule,
      providers: configuration.enabled
        ? [
            {
              provide: ErrorHandler,
              useClass: AdminUtilErrorGlobalErrorHandler,
            },
            {
              provide: ADMIN_UTIL_ERROR_HANDLERS,
              useClass: AdminUtilErrorFrontendErrorHandler,
              multi: true,
            },
            {
              provide: ADMIN_UTIL_ERROR_HANDLERS,
              useClass: AdminUtilErrorBackendErrorHandler,
              multi: true,
            },
            {
              provide: HTTP_INTERCEPTORS,
              useClass: AdminUtilErrorInterceptor,
              multi: true,
            },
          ]
        : [],
    };
  }
}
