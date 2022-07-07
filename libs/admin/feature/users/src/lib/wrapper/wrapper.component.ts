import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ofType, HttpMethod } from '@datorama/akita-ng-entity-service';
import { UsersService } from '@gpi/admin/data-access/users';
import { TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-feature-users-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
  loaders = this.usersService.loaders;
  notifiers$ = this.usersService.notifiers$;

  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private usersService: UsersService,
    private matSnackBar: MatSnackBar,
    private translocoService: TranslocoService,
  ) { }

  ngOnInit() {
    this.notifiers$.pipe(ofType('success'), takeUntil(this.unsubscribe$)).subscribe((action) => {
      switch (action.method) {
        case HttpMethod.POST:
          this.matSnackBar.open(this.translocoService.translate('users.notification.created'));
          break;
        case HttpMethod.PUT:
          this.matSnackBar.open(this.translocoService.translate('users.notification.edited'));
          break;
        case HttpMethod.DELETE:
          this.matSnackBar.open(this.translocoService.translate('users.notification.deleted'));
          break;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
