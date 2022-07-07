import { Injectable } from '@angular/core';

import { AdminUtilErrorQuery } from './admin-util-error.query';
import { AdminUtilErrorStore } from './admin-util-error.store';

@Injectable({ providedIn: 'root' })
export class AdminUtilErrorService {
  constructor(public query: AdminUtilErrorQuery, public store: AdminUtilErrorStore) { }
}
