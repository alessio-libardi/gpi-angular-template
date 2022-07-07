import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { AdminUtilTheme } from './state/admin-util-theme.model';
import { AdminUtilThemesService } from './state/admin-util-themes.service';

export function preloadThemes(adminUtilThemesService: AdminUtilThemesService) {
  return function() {
    const defaultThemes: AdminUtilTheme[] = [
      {
        id: 'light',
        label: 'Light',

        cssClass: 'theme-light',
      },
      {
        id: 'dark',
        label: 'Dark',

        cssClass: 'theme-dark',
      },
    ];

    adminUtilThemesService.store.upsertMany(defaultThemes);

    if (!adminUtilThemesService.query.hasActive()) {
      adminUtilThemesService.store.setActive(defaultThemes[0].id);
    }
  };
}

@NgModule()
export class AdminUtilThemesModule {
  static forRoot(): ModuleWithProviders<AdminUtilThemesModule> {
    return {
      ngModule: AdminUtilThemesModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          useFactory: preloadThemes,
          deps: [AdminUtilThemesService],
        },
      ],
    };
  }
}
