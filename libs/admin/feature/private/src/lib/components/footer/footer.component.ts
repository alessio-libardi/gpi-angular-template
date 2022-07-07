import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-feature-private-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input()
  version: string;
  @Input()
  authorLogoSrc: string;
}
