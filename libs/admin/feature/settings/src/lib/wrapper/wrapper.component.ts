import { Component } from '@angular/core';
import { AdminUtilLanguage, AdminUtilLanguagesService } from '@gpi/admin/util/languages';
import { AdminUtilTheme, AdminUtilThemesService } from '@gpi/admin/util/themes';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-feature-settings-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  languages$: Observable<AdminUtilLanguage[]> = this.adminUtilLanguagesService.query.selectAll();
  activeLanguage$: Observable<AdminUtilLanguage> = this.adminUtilLanguagesService.query.selectActive();

  themes$: Observable<AdminUtilTheme[]> = this.adminUtilThemesService.query.selectAll();
  activeTheme$: Observable<AdminUtilTheme> = this.adminUtilThemesService.query.selectActive();

  constructor(
    private adminUtilLanguagesService: AdminUtilLanguagesService,
    private adminUtilThemesService: AdminUtilThemesService,
  ) { }

  selectedLanguage(language: AdminUtilLanguage) {
    this.adminUtilLanguagesService.store.setActive(language.id);
  }

  selectedTheme(theme: AdminUtilTheme) {
    this.adminUtilThemesService.store.setActive(theme.id);
  }
}
