import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JobService } from '../job.service';
import JobModel from '../models/job';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { markdown } from 'markdown';


@Component({
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})

export class PostJobComponent {
  form: FormGroup;
  submitted = false;

  constructor(
  	private auth: AuthenticationService, 
  	private jobService: JobService, 
  	private router: Router,
  	private http: HttpClient,
    private fb: FormBuilder) {
    this.createForm();
  }

  public newJob: JobModel = new JobModel()
  public isLoggedIn = this.auth.isLoggedIn();
  jobId = String;

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.postJob();
  }

  postJob() {
    this.newJob.author = this.auth.getUserDetails().name;
    this.newJob.title = this.form.get('title').value;
    this.newJob.description = markdown.toHTML(this.form.get('description').value);

    this.jobService.createJob(this.newJob)
      .subscribe((res) => {
        this.jobId = res.jobId
        this.router.navigate(['/job/' + this.jobId]);
      });

  }

} 

