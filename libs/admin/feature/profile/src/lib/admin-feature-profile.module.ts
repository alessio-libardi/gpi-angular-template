import { NgModule } from '@angular/core';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { AdminFeatureProfileRoutingModule } from './admin-feature-profile-routing.module';

export const loader = ['en-US', 'it-IT'].reduce((acc, lang) => {
  acc[lang] = () => import(`./assets/i18n/${lang}.json`);

  return acc;
}, {});

@NgModule({
  imports: [AdminUtilSharedModule, AdminFeatureProfileRoutingModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'profile',
        loader,
      },
    },
  ],
})
export class AdminFeatureProfileModule { }
