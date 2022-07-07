import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdminUtilThemesQuery } from './admin-util-themes.query';
import { AdminUtilThemesStore } from './admin-util-themes.store';

@Injectable({ providedIn: 'root' })
export class AdminUtilThemesService {
  constructor(public query: AdminUtilThemesQuery, public store: AdminUtilThemesStore) { }
}
