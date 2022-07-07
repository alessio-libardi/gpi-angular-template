import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filterNil } from '@datorama/akita';
import { AdminUtilErrorService } from '@gpi/admin/util/error';
import { AdminUtilLanguagesService } from '@gpi/admin/util/languages';
import { AdminUtilThemesService } from '@gpi/admin/util/themes';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoLocaleService } from '@ngneat/transloco-locale';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-feature-shell-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();

  @HostBinding('attr.class')
  hostClass: string;

  constructor(
    private translocoService: TranslocoService,
    private translocoLocaleService: TranslocoLocaleService,
    private overlayContainer: OverlayContainer,
    private matSnackBar: MatSnackBar,
    private adminUtilErrorService: AdminUtilErrorService,
    private adminUtilLanguagesService: AdminUtilLanguagesService,
    private adminUtilThemesService: AdminUtilThemesService,
  ) { }

  ngOnInit() {
    this.adminUtilErrorService.query
      .selectError()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((error) => {
        if (error) {
          this.matSnackBar.open('Operazione fallita ci scusiamo per il disagio');

          console.error(error);
        }
      });

    this.adminUtilLanguagesService.query
      .selectActive()
      .pipe(filterNil, takeUntil(this.unsubscribe$))
      .subscribe((language) => {
        this.translocoService.setActiveLang(language.id);
        this.translocoLocaleService.setLocale(language.id);
      });

    this.adminUtilThemesService.query
      .selectActive()
      .pipe(filterNil, takeUntil(this.unsubscribe$))
      .subscribe((theme) => {
        this.hostClass = `${theme.cssClass} mat-typography typography`;

        // remove old theme class and add new theme class
        // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
        const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
        const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) =>
          item.includes('theme-'),
        );
        if (themeClassesToRemove.length) {
          overlayContainerClasses.remove(...themeClassesToRemove);
        }
        overlayContainerClasses.add(theme.cssClass);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
