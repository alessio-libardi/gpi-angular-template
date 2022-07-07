import { InjectionToken } from '@angular/core';

import { AdminUtilLanguagesConfiguration } from './admin-util-languages-configuration.interface';

export const ADMIN_UTIL_LANGUAGES_CONFIGURATION = new InjectionToken<AdminUtilLanguagesConfiguration>(
  'Admin Util Languages Configuration',
);
