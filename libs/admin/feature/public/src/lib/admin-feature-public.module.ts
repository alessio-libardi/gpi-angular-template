import { NgModule } from '@angular/core';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { AdminFeaturePublicRoutingModule } from './admin-feature-public-routing.module';

export const loader = ['en-US', 'it-IT'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`);

  return acc;
},                                              { });

@NgModule({
  imports: [AdminUtilSharedModule, AdminFeaturePublicRoutingModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'public',
        loader,
      },
    },
  ],
})
export class AdminFeaturePublicModule { }
