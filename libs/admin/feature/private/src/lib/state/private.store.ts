import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PrivateState {
  ui: {
    nav: {
      isOpen: boolean;
    };
  };
}

export function createInitialState(): PrivateState {
  return {
    ui: {
      nav: {
        isOpen: false,
      },
    },
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'admin-feature-Private' })
export class PrivateStore extends Store<PrivateState> {
  constructor() {
    super(createInitialState());
  }

  openNav() {
    this.update({ ui: { nav: { isOpen: true } } });
  }
  closeNav() {
    this.update({ ui: { nav: { isOpen: false } } });
  }
}
