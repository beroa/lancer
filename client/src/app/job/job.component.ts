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
  api_data_user_addr: any = {};
  private sub: any;

  private isLoggedIn: boolean;
  private isFundingOpen = false;
  form: FormGroup;
  submitted = false;
  confirmed = false;
  txid = 0;

  public popoverTitle: string = 'Transaction Confirmation';
  public popoverMessage: string = 'Are you sure you want to send _ to _ ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private blockexplorer: BlockExplorerService,
    private fb: FormBuilder,
    private auth: AuthenticationService) {
    this.createForm();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.jobId = params['id'];
    });

    this.jobService.getJob(this.jobId)
      .subscribe(params => {
        this.job = params.job;
        this.blockexplorer.get_addr(this.job.address).subscribe(res => {
          this.api_data_job_addr = res;
        })
      });

    if (this.isLoggedIn) {
      this.auth.profile().subscribe(user => {
        this.user = user;
        this.blockexplorer.get_addr(this.user.address).subscribe(res => {
          this.api_data_user_addr = res;
        })
      })
    }
  }

  createForm() {
    this.form = this.fb.group({
      tx_value: ['', Validators.required],
      tx_fees: ['.0002', Validators.required]
    });
  }

  fundMe() {
    if (!this.submitted) {
      this.isFundingOpen = !this.isFundingOpen;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    if (this.api_data_user_addr.balance < this.form.controls.tx_value.value) {
      return;
    }

    this.auth.transaction(this.user._id, this.job.address, this.form.controls.tx_value.value)
    .subscribe( res => {
      console.log(res);
        this.txid = JSON.parse(res).txid;
        this.confirmed = true;
      }, (err) => {
        console.error(err);
      });
  }

  generateTransaction() {

  }
  
}