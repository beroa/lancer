import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  submitted = false;
  
  // credentials will recieve values from formbuilder after submit
  credentials: TokenPayload = {
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
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.register();
    }

  register() {
    this.credentials.name = this.form.get('name').value;
    this.credentials.password = this.form.get('password').value;

    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
