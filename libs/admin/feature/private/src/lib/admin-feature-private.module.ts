import { NgModule } from '@angular/core';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { AdminFeaturePrivateRoutingModule } from './admin-feature-private-routing.module';

export const loader = ['en-US', 'it-IT'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`);

  return acc;
}, {});

@NgModule({
  imports: [AdminUtilSharedModule, AdminFeaturePrivateRoutingModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'private',
        loader,
      },
    },
  ],
})
export class AdminFeaturePrivateModule { }
