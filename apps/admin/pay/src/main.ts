import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { persistState } from '@datorama/akita';
import { debounceTime } from 'rxjs/operators';

import { PayModule } from './app/pay.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

persistState({
  include: ['admin-data-access-auth', 'admin-util-languages', 'admin-util-themes'],
  preStorageUpdate(storeName, state) {
    if (storeName === 'admin-util-languages' || storeName === 'admin-util-themes') {
      return {
        active: state.active,
      };
    }

    return state;
  },
  preStorageUpdateOperator: () => debounceTime(2000),
});

platformBrowserDynamic()
  .bootstrapModule(PayModule)
  .catch((err) => console.error(err));
