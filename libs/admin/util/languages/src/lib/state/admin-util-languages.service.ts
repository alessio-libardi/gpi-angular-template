import { Injectable } from '@angular/core';

import { AdminUtilLanguagesQuery } from './admin-util-languages.query';
import { AdminUtilLanguagesStore } from './admin-util-languages.store';

@Injectable({ providedIn: 'root' })
export class AdminUtilLanguagesService {
  constructor(public query: AdminUtilLanguagesQuery, public store: AdminUtilLanguagesStore) { }
}
