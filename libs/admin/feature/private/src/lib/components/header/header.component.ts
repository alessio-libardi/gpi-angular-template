import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@gpi/admin/data-access/auth';

import { PrivateService } from '../../state/private.service';

@Component({
  selector: 'admin-feature-private-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  title: string;
  @Input()
  applicationLogoSrc: string;

  constructor(
    private privateService: PrivateService,
    private authService: AuthService,
    private router: Router,
  ) { }

  openNav() {
    this.privateService.store.openNav();
  }

  logout() {
    this.authService.logout().subscribe(() => this.router.navigateByUrl('/'));
  }
}
