export interface AdminUtilLanguage {
  id: string;
  label: string;
}

export function createAdminUtilLanguage(params: Partial<AdminUtilLanguage>) {
  return {
    ...params,
  } as AdminUtilLanguage;
}
