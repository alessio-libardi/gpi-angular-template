import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createUser, User } from '@gpi/admin/entity';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-feature-users-form-user',
  templateUrl: 'form-user.component.html',
  styleUrls: ['form-user.component.scss'],
})
export class FormUserComponent implements OnChanges, OnDestroy {
  @Input()
  entity: User;
  @Input()
  submit$: Observable<void>;

  @Output()
  submitted: EventEmitter<User> = new EventEmitter();

  @ViewChild('button')
  buttonElementRef: ElementRef;

  form: FormGroup = this.buildForm();

  unsubscribe$: Subject<void> = new Subject();

  buildForm(): FormGroup {
    const form = new FormGroup({
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone: new FormControl(null, Validators.required),
    });

    return form;
  }

  updateForm(entity: User): FormGroup {
    const form = this.buildForm();
    form.patchValue(entity);

    return form;
  }

  submit(form: FormGroup) {
    if (form.valid) {
      const entity = createUser({
        ...this.entity,
        ...form.value,
      });

      this.submitted.emit(entity);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes.entity && this.entity) {
        this.form = this.updateForm(this.entity);
      }

      // Initialize submit from parent
      if (changes.submit$ && this.submit$) {
        this.submit$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
          const htmlFormSubmitButtonElement: HTMLButtonElement = this.buttonElementRef.nativeElement;

          htmlFormSubmitButtonElement.click();
        });
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
