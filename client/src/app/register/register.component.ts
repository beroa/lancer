import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  // registerForm: FormGroup;
  // submitted = false;

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(
    private auth: AuthenticationService,
    private router: Router) {}

  // onSubmit() {
  //       this.submitted = true;
  //       if (this.registerForm.invalid) {
  //           return;
  //       }
  //       this.register();
  //   }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
