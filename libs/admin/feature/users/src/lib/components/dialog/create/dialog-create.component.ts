import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '@gpi/admin/entity';
import { Subject } from 'rxjs';

@Component({
  selector: 'admin-feature-users-dialog-create',
  templateUrl: 'dialog-create.component.html',
  styleUrls: ['dialog-create.component.scss'],
})
export class DialogCreateComponent implements OnDestroy {
  submit$: Subject<void> = new Subject();

  constructor(private matDialogRef: MatDialogRef<DialogCreateComponent>) { }

  close() {
    this.matDialogRef.close();
  }

  save(entity?: User) {
    if (entity) {
      this.matDialogRef.close(entity);
    } else {
      this.submit$.next();
    }
  }

  ngOnDestroy() {
    this.submit$.complete();
  }
}
