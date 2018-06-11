import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JobService } from '../job.service';
import JobModel from '../models/job';
import { Router } from '@angular/router';


@Component({
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})

export class PostJobComponent {
  constructor(
  	private auth: AuthenticationService, 
  	private jobService: JobService, 
  	private router: Router,
  	private http: HttpClient) {;
  }

  public newJob: JobModel = new JobModel()
  public isLoggedIn = this.auth.isLoggedIn();
  jobId = String;

  create() {
    this.newJob.setAuthor(this.auth.getUserDetails().name);
    console.log(this.newJob.author);

    this.jobService.createJob(this.newJob)
      .subscribe((res) => {
        this.jobId = res.jobId
        this.router.navigate(['/job/' + this.jobId]);
      });

  }

} 

