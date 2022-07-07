import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AdminUtilAuthModule } from '@gpi/admin/util/auth';
import { AdminUtilEnvironmentModule } from '@gpi/admin/util/environment';
import { AdminUtilErrorModule } from '@gpi/admin/util/error';
import { AdminUtilIconsModule } from '@gpi/admin/util/icons';
import { AdminUtilLanguagesModule } from '@gpi/admin/util/languages';
import { AdminUtilNotificationsModule } from '@gpi/admin/util/notifications';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';
import { AdminUtilThemesModule } from '@gpi/admin/util/themes';

import { environment } from '../../../src/environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),

    environment.production ? [] : AkitaNgDevtools,

    AdminUtilAuthModule.forRoot(),
    AdminUtilEnvironmentModule.forRoot({ environment: environment }),
    AdminUtilErrorModule.forRoot({ enabled: false }),
    AdminUtilIconsModule.forRoot(),
    AdminUtilLanguagesModule.forRoot({
      prodMode: environment.production,
    }),
    AdminUtilNotificationsModule.forRoot(),
    AdminUtilSharedModule.forRoot(),
    AdminUtilThemesModule.forRoot(),
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: environment.urls.api },
    },
  ],
})
export class PayCoreModule { }
