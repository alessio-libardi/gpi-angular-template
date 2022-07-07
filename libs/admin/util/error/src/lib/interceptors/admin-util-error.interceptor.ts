import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AdminUtilErrorBackend } from '../models/admin-util-error-backend.interface';

export class AdminUtilErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        const error = new AdminUtilErrorBackend(err);

        return throwError(error);
      }),
    );
  }
}
