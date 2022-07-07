export interface AuthorizationGuardOptions {
  authorized: boolean;
  redirectTo: string;
  roles: string[];
}

export const AUTHORIZATION_GUARD_OPTIONS_DEFAULT = {
  authorized: true,
  redirectTo: '/',
  roles: [],
};
