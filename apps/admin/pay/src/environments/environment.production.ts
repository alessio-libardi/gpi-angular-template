import { AdminUtilEnvironment } from '@gpi/admin/util/environment';

export const environment: AdminUtilEnvironment = {
  develop: false,
  production: true,
  staging: false,
  urls: {
    api: 'https://example.com/rest/api',
  },

  title: 'Pay',
  version: '0.0.1',

  applicationLogoSrc: './assets/images/logo.svg',
  authorLogoSrc: './assets/images/logo-author.svg',
};
