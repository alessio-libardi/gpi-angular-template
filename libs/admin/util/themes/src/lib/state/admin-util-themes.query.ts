import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { AdminUtilThemesState, AdminUtilThemesStore } from './admin-util-themes.store';

@Injectable({ providedIn: 'root' })
export class AdminUtilThemesQuery extends QueryEntity<AdminUtilThemesState> {
  constructor(protected store: AdminUtilThemesStore) {
    super(store);
  }
}
