import { Injectable } from '@angular/core';

import { PrivateQuery } from './private.query';
import { PrivateStore } from './private.store';

@Injectable({ providedIn: 'root' })
export class PrivateService {
  constructor(public query: PrivateQuery, public store: PrivateStore) { }
}
