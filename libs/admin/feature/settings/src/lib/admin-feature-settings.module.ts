import { NgModule } from '@angular/core';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { AdminFeatureSettingsRoutingModule } from './admin-feature-settings-routing.module';

export const loader = ['en-US', 'it-IT'].reduce((acc, lang) => {
  acc[lang] = () => import(`./assets/i18n/${lang}.json`);

  return acc;
}, {});

@NgModule({
  imports: [AdminUtilSharedModule, AdminFeatureSettingsRoutingModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'settings',
        loader,
      },
    },
  ],
})
export class AdminFeatureSettingsModule { }
