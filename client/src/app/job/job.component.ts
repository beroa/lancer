import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommentsComponent } from '../comments/comments.component';
import { BlockExplorerService } from '../blockexplorer.service';
import { JobService } from '../job.service';
import JobModel from '../models/job';
import UserModel from '../models/user';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { TransactionComponent } from '../transaction/transaction.component';


@Component({
	selector: 'app-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
	jobId: string;
	job: JobModel;
	user: UserModel;
	api_data_job_addr: any = {};
	private sub: any;

	private isLoggedIn: boolean;
	private isJobAuthor = false;
	private isFundingOpen = false;
	form: FormGroup;
	submitted = false;
	confirmed = false;
	txid = 0;  

	constructor(
		private jobService: JobService,
		private route: ActivatedRoute,
		private blockexplorer: BlockExplorerService,
		private fb: FormBuilder,
		private auth: AuthenticationService) {
		this.isLoggedIn = this.auth.isLoggedIn();
	}

	ngOnInit(): void {
		this.sub = this.route.params.subscribe(params => {
			 this.jobId = params['id'];
		});

		// get job
		this.jobService.getJob(this.jobId)
			.subscribe(params => {
				this.job = params.job;

				// get job address balance
				this.blockexplorer.get_addr(this.job.address).subscribe(res => {
					this.api_data_job_addr = res.data;
				})

				// get user
				if (this.isLoggedIn) {
					this.auth.profile().subscribe(user => {
						this.user = user;
						if (this.user.name == this.job.author) {
							this.isJobAuthor = true;
						}
					});
				}
			});

		
	}

	fundMe() {
		if (!this.submitted) {
			this.isFundingOpen = !this.isFundingOpen;
		}
	}

}