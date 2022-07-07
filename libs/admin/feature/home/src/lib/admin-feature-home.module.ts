import { NgModule } from '@angular/core';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { AdminFeatureHomeRoutingModule } from './admin-feature-home-routing.module';

export const loader = ['en-US', 'it-IT'].reduce((acc, lang) => {
  acc[lang] = () => import(`./assets/i18n/${lang}.json`);

  return acc;
}, {});

@NgModule({
  imports: [AdminUtilSharedModule, AdminFeatureHomeRoutingModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'home',
        loader,
      },
    },
  ],
})
export class AdminFeatureHomeModule { }
