import { Component, Inject } from '@angular/core';
import { AdminUtilEnvironment, ADMIN_UTIL_ENVIRONMENT } from '@gpi/admin/util/environment';

@Component({
  selector: 'admin-feature-public-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  title = this.environment.title;

  applicationLogoSrc = this.environment.applicationLogoSrc;

  constructor(@Inject(ADMIN_UTIL_ENVIRONMENT) private environment: AdminUtilEnvironment) { }
}
