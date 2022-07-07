import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '@gpi/admin/data-access/users';
import { User } from '@gpi/admin/entity';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-feature-users-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  entity$: Observable<User> = this.usersService.query.selectActive();
  submit$: Subject<void> = new Subject();

  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
  ) { }

  back() {
    this.router.navigate(['./..'], {
      relativeTo: this.activatedRoute,
      replaceUrl: true,
    });
  }

  save(entity?: User) {
    if (entity) {
      this.usersService.update(entity.id, entity).subscribe();
    } else {
      this.submit$.next();
    }
  }

  ngOnInit() {
    // Fetch user
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        switchMap((id) => this.usersService.get<User>(id)),
        takeUntil(this.unsubscribe$),
      )
      // Set active user
      .subscribe((entity) => {
        this.usersService.store.setActive(entity.id);
      });
  }

  ngOnDestroy() {
    this.submit$.complete();

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
