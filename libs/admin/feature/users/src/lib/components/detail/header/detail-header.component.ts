import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'admin-feature-users-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent {
  @Output()
  backed: EventEmitter<void> = new EventEmitter();
  @Output()
  saved: EventEmitter<void> = new EventEmitter();

  back() {
    this.backed.emit();
  }
  save() {
    this.saved.emit();
  }
}
