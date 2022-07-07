import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@gpi/admin/entity';

@Component({
  selector: 'admin-feature-users-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.scss'],
})
export class ListResultsComponent {
  @Input()
  entities: User[];

  @Output()
  edited: EventEmitter<User> = new EventEmitter();
  @Output()
  deleted: EventEmitter<User> = new EventEmitter();

  displayedColumns: string[] = ['id', 'name', 'actions'];

  edit(entity: User) {
    this.edited.emit(entity);
  }
  delete(entity: User) {
    this.deleted.emit(entity);
  }
}
