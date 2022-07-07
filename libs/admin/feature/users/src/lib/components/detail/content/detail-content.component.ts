import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@gpi/admin/entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-feature-users-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.scss'],
})
export class DetailContentComponent {
  @Input()
  entity: User;
  @Input()
  submit$: Observable<void>;

  @Output()
  saved: EventEmitter<User> = new EventEmitter();

  save(entity: User) {
    this.saved.emit(entity);
  }
}
