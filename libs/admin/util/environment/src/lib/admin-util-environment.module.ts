import { ModuleWithProviders, NgModule } from '@angular/core';

import { AdminUtilEnvironmentConfiguration } from './models/admin-util-environment-configurations.interface';
import { ADMIN_UTIL_ENVIRONMENT } from './models/admin-util-environment.injection-token';

@NgModule()
export class AdminUtilEnvironmentModule {
  static forRoot(configuration: AdminUtilEnvironmentConfiguration): ModuleWithProviders<AdminUtilEnvironmentModule> {
    return {
      ngModule: AdminUtilEnvironmentModule,
      providers: [
        {
          provide: ADMIN_UTIL_ENVIRONMENT,
          useValue: configuration.environment,
        },
      ],
    };
  }
}
