export interface AuthenticationGuardOptions {
  authenticated: boolean;
  redirectTo: string;
}

export const AUTHENTICATION_GUARD_OPTIONS_DEFAULT = {
  authenticated: true,
  redirectTo: '/',
};
