import { Response } from '@angular/http';
import { JobService } from '../job.service';
import JobModel from '../models/job';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-findjob',
  templateUrl: './findjob.component.html',
  styleUrls: ['./findjob.component.css']
})
export class FindJobComponent implements OnInit {

  constructor(
    private jobService: JobService,
    private router: Router
  ) { }

  jobList: JobModel[];
  pageCount: number;
  pageNumber = 1;

  ngOnInit(): void {
    this.jobService.getJobs(this.pageNumber)
      .subscribe(jobs => {
        this.jobList = jobs.jobList
        this.pageCount = jobs.pageCount
      });
  }

  goToJob(jobId) {
    this.router.navigate(['/job/' + jobId]);
  }

  changePage(newPage) {
	this.jobService.getJobs(newPage)
	.subscribe(jobs => {
        this.jobList = jobs.jobList
        this.pageCount = jobs.pageCount
      });
	this.pageNumber = newPage;
  }

countPages() {
	var pages = [];
    for (var i = 0; i < this.pageCount; i++) {
    	pages.push(i+1);
    }
    return pages;
  }

}