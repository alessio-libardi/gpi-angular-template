import { Component, Inject } from '@angular/core';
import { AdminUtilEnvironment, ADMIN_UTIL_ENVIRONMENT } from '@gpi/admin/util/environment';

@Component({
  selector: 'admin-feature-private-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  title = this.environment.title;
  version = this.environment.version;

  applicationLogoSrc = this.environment.applicationLogoSrc;
  authorLogoSrc = this.environment.authorLogoSrc;

  constructor(@Inject(ADMIN_UTIL_ENVIRONMENT) private environment: AdminUtilEnvironment) { }
}
