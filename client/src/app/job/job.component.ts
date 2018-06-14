import { Response } from '@angular/http';
import { JobService } from '../job.service';
import JobModel from '../models/job';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute
  ) { }

  jobId: string;
  job: JobModel;
  private sub: any;


  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
       this.jobId = params['id'];
    });

    this.jobService.getJob(this.jobId)
      .subscribe(params => {
        this.job = params.job;
        console.log(this.job);
      });
  }

}