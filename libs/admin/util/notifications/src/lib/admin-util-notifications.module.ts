import { ModuleWithProviders, NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule()
export class AdminUtilNotificationsModule {
  static forRoot(): ModuleWithProviders<AdminUtilNotificationsModule> {
    return {
      ngModule: AdminUtilNotificationsModule,
      providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }],
    };
  }
}
