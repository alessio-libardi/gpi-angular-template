import { Component, Input } from '@angular/core';

import { PrivateService } from '../../state/private.service';

@Component({
  selector: 'admin-feature-private-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input()
  title: string;
  @Input()
  applicationLogoSrc: string;

  isNavOpen$ = this.privateService.query.isNavOpen$;

  constructor(private privateService: PrivateService) { }

  closeNav() {
    this.privateService.store.closeNav();
  }
}
