import { ErrorHandler, Inject, Injectable, InjectionToken } from '@angular/core';

import { AdminUtilErrorBackend } from '../models/admin-util-error-backend.interface';
import { AdminUtilErrorFrontend } from '../models/admin-util-error-frontend.interface';

export const ADMIN_UTIL_ERROR_HANDLERS: InjectionToken<ErrorHandler[]> = new InjectionToken<ErrorHandler[]>(
  'ERROR_HANDLERS',
  {
    providedIn: 'root',
    factory: () => [],
  },
);

@Injectable()
export class AdminUtilErrorGlobalErrorHandler implements ErrorHandler {
  constructor(@Inject(ADMIN_UTIL_ERROR_HANDLERS) private errorHandlers: ErrorHandler[]) { }

  handleError(error) {
    if (!(error instanceof AdminUtilErrorFrontend || error instanceof AdminUtilErrorBackend)) {
      error = new AdminUtilErrorFrontend(error);
    }

    this.errorHandlers.forEach((handler) => handler.handleError(error));
  }
}
