import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@gpi/admin/data-access/auth';

@Component({
  selector: 'admin-feature-public-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) { }

  submit(form: FormGroup) {
    if (form.valid) {
      this.authService.login(form.value).subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
