import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { AdminUtilLanguagesState, AdminUtilLanguagesStore } from './admin-util-languages.store';

@Injectable({ providedIn: 'root' })
export class AdminUtilLanguagesQuery extends QueryEntity<AdminUtilLanguagesState> {
  constructor(protected store: AdminUtilLanguagesStore) {
    super(store);
  }
}
