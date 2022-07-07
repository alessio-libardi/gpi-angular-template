import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'admin-feature-users-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent {
  @Output()
  created: EventEmitter<void> = new EventEmitter();

  create() {
    this.created.emit();
  }
}
