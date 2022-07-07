import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { AdminUtilErrorState, AdminUtilErrorStore } from './admin-util-error.store';

@Injectable({ providedIn: 'root' })
export class AdminUtilErrorQuery extends Query<AdminUtilErrorState> {
  constructor(protected store: AdminUtilErrorStore) {
    super(store);
  }
}
