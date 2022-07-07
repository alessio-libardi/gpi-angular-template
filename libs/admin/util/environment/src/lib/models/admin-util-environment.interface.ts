export interface AdminUtilEnvironment {
  readonly develop: boolean;
  readonly production: boolean;
  readonly staging: boolean;
  readonly urls: {
    readonly api: string;
  };

  readonly title: string;
  readonly version: string;

  readonly applicationLogoSrc: string;
  readonly authorLogoSrc: string;
}
