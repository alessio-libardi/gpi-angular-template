import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '@gpi/admin/data-access/users';
import { User } from '@gpi/admin/entity';
import { Observable, Subject } from 'rxjs';

import { DialogCreateComponent } from '../../components/dialog/create/dialog-create.component';

@Component({
  selector: 'admin-feature-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  entities$: Observable<User[]> = this.usersService.query.selectAll();

  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private matDialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    this.usersService.get().subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  create() {
    const dialogRef = this.matDialog.open(DialogCreateComponent);

    dialogRef.afterClosed().subscribe((entity: User) => {
      if (entity) {
        this.usersService.add<User>(entity).subscribe((createdEntity) => {
          this.edit(createdEntity);
        });
      }
    });
  }

  edit(entity: User) {
    this.router.navigate([entity.id], { relativeTo: this.activatedRoute });
  }

  delete(entity: User) {
    this.usersService.delete(entity.id).subscribe();
  }
}
