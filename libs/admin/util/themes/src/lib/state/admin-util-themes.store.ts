import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { AdminUtilTheme } from './admin-util-theme.model';

export interface AdminUtilThemesState extends EntityState<AdminUtilTheme, string>, ActiveState<string> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'admin-util-themes' })
export class AdminUtilThemesStore extends EntityStore<AdminUtilThemesState> {
  constructor() {
    super();
  }
}
