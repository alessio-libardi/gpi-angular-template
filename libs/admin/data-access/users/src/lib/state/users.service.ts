import { Injectable } from '@angular/core';
import {
  filterStore,
  NgEntityService,
  NgEntityServiceConfig,
  NgEntityServiceLoader,
  NgEntityServiceNotifier,
} from '@datorama/akita-ng-entity-service';

import { UsersQuery } from './users.query';
import { UsersState, UsersStore } from './users.store';

@NgEntityServiceConfig({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  resourceName: 'users',
})
@Injectable({ providedIn: 'root' })
export class UsersService extends NgEntityService<UsersState> {
  loaders = this.loaderService.loadersFor('admin-data-access-users');
  notifiers$ = this.notifierService.action$.pipe(filterStore('admin-data-access-users'));

  constructor(
    public query: UsersQuery,
    public store: UsersStore,
    protected loaderService: NgEntityServiceLoader,
    protected notifierService: NgEntityServiceNotifier,
  ) {
    super(store);
  }
}
