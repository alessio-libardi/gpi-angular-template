// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AdminUtilEnvironment } from '@gpi/admin/util/environment';

export const environment: AdminUtilEnvironment = {
  develop: false,
  production: false,
  staging: false,
  urls: {
    api: 'localhost:8080',
  },

  title: 'Care',
  version: '0.0.1',

  applicationLogoSrc: './assets/images/logo.svg',
  authorLogoSrc: './assets/images/logo-author.svg',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
