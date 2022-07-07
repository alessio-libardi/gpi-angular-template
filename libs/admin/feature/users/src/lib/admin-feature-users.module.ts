import { NgModule } from '@angular/core';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { AdminFeatureUsersRoutingModule } from './admin-feature-users-routing.module';

export const loader = ['en-US', 'it-IT'].reduce((acc, localeId) => {
  acc[localeId] = () => import(`./i18n/${localeId}.json`);

  return acc;
},                                              { });

@NgModule({
  imports: [AdminUtilSharedModule, AdminFeatureUsersRoutingModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'users',
        loader,
      },
    },
  ],
})
export class AdminFeatureUsersModule { }
