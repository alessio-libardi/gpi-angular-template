import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { AdminUtilLanguage } from './admin-util-language.model';

export interface AdminUtilLanguagesState extends EntityState<AdminUtilLanguage, string>, ActiveState<string> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'admin-util-languages' })
export class AdminUtilLanguagesStore extends EntityStore<AdminUtilLanguagesState> {
  constructor() {
    super();
  }
}
