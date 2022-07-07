import { ErrorHandler, Injectable } from '@angular/core';

import { AdminUtilErrorBackend } from '../models/admin-util-error-backend.interface';
import { AdminUtilErrorService } from '../state/admin-util-error.service';

@Injectable()
export class AdminUtilErrorBackendErrorHandler implements ErrorHandler {
  constructor(private adminUtilErrorService: AdminUtilErrorService) { }

  handleError(error) {
    if (error instanceof AdminUtilErrorBackend) {
      this.adminUtilErrorService.store.setError(error);
    }
  }
}
