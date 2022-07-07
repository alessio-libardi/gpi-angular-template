import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from '@gpi/admin/entity';

export interface UsersState extends EntityState<User, string>, ActiveState<string> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'admin-data-access-users' })
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super();
  }
}
