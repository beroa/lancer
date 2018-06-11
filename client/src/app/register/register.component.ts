import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // registerForm: FormGroup;
  // submitted = false;
  form: FormGroup;
  
  // credentials will recieve values from formbuilder after submit
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: '',
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // onSubmit() {
  //       this.submitted = true;
  //       if (this.registerForm.invalid) {
  //           return;
  //       }
  //       this.register();
  //   }

  register() {
    this.credentials.email = this.form.get('email').value;
    this.credentials.name = this.form.get('name').value;
    this.credentials.password = this.form.get('password').value;

    console.log(this.form);
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
