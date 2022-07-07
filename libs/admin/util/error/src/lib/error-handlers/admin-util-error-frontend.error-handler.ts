import { ErrorHandler, Injectable } from '@angular/core';

import { AdminUtilErrorFrontend } from '../models/admin-util-error-frontend.interface';
import { AdminUtilErrorService } from '../state/admin-util-error.service';

@Injectable()
export class AdminUtilErrorFrontendErrorHandler implements ErrorHandler {
  constructor(private adminUtilErrorService: AdminUtilErrorService) { }

  handleError(error) {
    if (error instanceof AdminUtilErrorFrontend) {
      this.adminUtilErrorService.store.setError(error);
    }
  }
}
