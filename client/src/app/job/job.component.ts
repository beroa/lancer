import { Response } from '@angular/http';
import { JobService } from '../job.service';
import JobModel from '../models/job';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { BlockExplorerService } from '../blockexplorer.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private blockexplorer: BlockExplorerService
  ) { }

  jobId: string;
  job: JobModel;
  private sub: any;
  api_data: any = {};


  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
       this.jobId = params['id'];
    });

    this.jobService.getJob(this.jobId)
      .subscribe(params => {
        this.job = params.job;
        console.log(this.job);

        this.blockexplorer.get_addr(this.job.address).subscribe(res => {
          this.api_data = res;
          console.log(this.api_data);
        })
      });
  }

}