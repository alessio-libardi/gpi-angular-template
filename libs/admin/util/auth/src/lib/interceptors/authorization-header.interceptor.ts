import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '@gpi/admin/data-access/auth';
import { AdminUtilEnvironment, ADMIN_UTIL_ENVIRONMENT } from '@gpi/admin/util/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    @Inject(ADMIN_UTIL_ENVIRONMENT) private environment: AdminUtilEnvironment,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiUrl = this.environment.urls.api;
    const token = this.authService.query.getValue().token;

    if (req.url.startsWith(apiUrl) && token) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }

    return next.handle(req);
  }
}
