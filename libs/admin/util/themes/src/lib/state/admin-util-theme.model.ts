export interface AdminUtilTheme {
  id: string;
  label: string;

  cssClass: string;
}

export function createAdminUtilTheme(params: Partial<AdminUtilTheme>) {
  return {
    ...params,
  } as AdminUtilTheme;
}
