import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { translocoConfig, Translation, TranslocoLoader, TRANSLOCO_CONFIG, TRANSLOCO_LOADER } from '@ngneat/transloco';
import { TranslocoLocaleModule, TranslocoLocaleService } from '@ngneat/transloco-locale';

import { ADMIN_UTIL_LANGUAGES_CONFIGURATION } from './models/admin-util-languages-configuration.injection-token';
import { AdminUtilLanguagesConfiguration } from './models/admin-util-languages-configuration.interface';
import { AdminUtilLanguage } from './state/admin-util-language.model';
import { AdminUtilLanguagesService } from './state/admin-util-languages.service';

export function preloadLanguages(adminUtilLanguagesService: AdminUtilLanguagesService) {
  return function() {
    const defaultLanguages: AdminUtilLanguage[] = [
      {
        id: 'it-IT',
        label: 'Italiano (IT)',
      },
      {
        id: 'en-US',
        label: 'English (US)',
      },
    ];

    adminUtilLanguagesService.store.upsertMany(defaultLanguages);
    if (!adminUtilLanguagesService.query.hasActive()) {
      adminUtilLanguagesService.store.setActive(defaultLanguages[0].id);
    }
  };
}

export function loadLanguages(
  adminUtilLanguageConfiguration: AdminUtilLanguagesConfiguration,
  adminUtilLanguagesService: AdminUtilLanguagesService,
) {
  const languages = adminUtilLanguagesService.query.getAll();
  const activeLanguage = adminUtilLanguagesService.query.getActive() || languages[0];

  return translocoConfig({
    availableLangs: languages,
    defaultLang: activeLanguage.id,
    // Remove this option if your application
    // doesn't support changing language in runtime.
    reRenderOnLangChange: true,
    prodMode: adminUtilLanguageConfiguration.prodMode,
  });
}

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) { }

  getTranslation(localeId: string) {
    return this.http.get<Translation>(`./assets/i18n/${localeId}.json`);
  }
}

@NgModule({
  imports: [TranslocoLocaleModule.init()],
})
export class AdminUtilLanguagesModule {
  static forRoot(configuration: AdminUtilLanguagesConfiguration): ModuleWithProviders<AdminUtilLanguagesModule> {
    return {
      ngModule: AdminUtilLanguagesModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          useFactory: preloadLanguages,
          deps: [AdminUtilLanguagesService],
        },
        {
          provide: ADMIN_UTIL_LANGUAGES_CONFIGURATION,
          useValue: configuration,
        },
        {
          provide: TRANSLOCO_CONFIG,
          useFactory: loadLanguages,
          deps: [ADMIN_UTIL_LANGUAGES_CONFIGURATION, AdminUtilLanguagesService],
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
      ],
    };
  }
}
