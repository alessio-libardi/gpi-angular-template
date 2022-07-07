import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AdminUtilErrorState {
  error: any;
}

export function createInitialState(): AdminUtilErrorState {
  return {
    error: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'admin-util-error' })
export class AdminUtilErrorStore extends Store<AdminUtilErrorState> {
  constructor() {
    super(createInitialState());
  }
}
