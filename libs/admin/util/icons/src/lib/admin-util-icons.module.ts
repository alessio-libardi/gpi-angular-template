import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@NgModule()
export class AdminUtilIconsModule {
  static forRoot(): ModuleWithProviders<AdminUtilIconsModule> {
    return {
      ngModule: AdminUtilIconsModule,
      providers: [],
    };
  }

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.addSvgIconToRegistry('menu', './assets/icons/menu.svg');
    this.addSvgIconToRegistry('person', './assets/icons/person.svg');
    this.addSvgIconToRegistry('more_vert', './assets/icons/more_vert.svg');
  }

  private addSvgIconToRegistry(iconName: string, iconPath: string) {
    this.iconRegistry.addSvgIcon(iconName, this.sanitizeIconPath(iconPath || iconName));
  }

  private sanitizeIconPath(iconPath: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(iconPath);
  }
}
