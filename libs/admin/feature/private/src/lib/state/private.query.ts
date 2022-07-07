import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map } from 'rxjs/operators';

import { PrivateState, PrivateStore } from './private.store';

@Injectable({ providedIn: 'root' })
export class PrivateQuery extends Query<PrivateState> {
  ui$ = this.select('ui');
  isNavOpen$ = this.ui$.pipe(map((ui) => ui.nav.isOpen));

  constructor(protected store: PrivateStore) {
    super(store);
  }
}
