// import { Response } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommentsComponent } from '../comments/comments.component';
import { BlockExplorerService } from '../blockexplorer.service';
import UserModel from '../models/user';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
	isLoggedIn: boolean;
	fromJob = false; // not called from job page
	hasDestination = false; // not called from withdraw

	@Input() destination_address? = "";
	@Input() destination_comment?;
	@Input() source_job?;

	api_dataIsJobs = false;
	@Input() api_data_job?;
	api_data: any = {};

	form: FormGroup;
	submitted = false;
	confirmed = false;
	user: UserModel;

	txid = 0;
	error_message = "";

	constructor(
		private route: ActivatedRoute,
		private blockexplorer: BlockExplorerService,
		private fb: FormBuilder,
		private auth: AuthenticationService) {
	this.createForm();
	this.isLoggedIn = this.auth.isLoggedIn();
	}

	ngOnInit(): void {
		if (!this.api_data_job) {
			this.fromJob = false;
			this.auth.profile().subscribe(res => {
				this.user = res.profile;
				this.blockexplorer.get_addr(this.user.address).subscribe(res => {
					this.api_data = res.data;
				})
			})
		} else {
			this.fromJob = true;
			this.api_data = this.api_data_job;
			this.form.controls.tx_destination.setValue(this.destination_comment._id);
			this.hasDestination = true;
			
		}

		if (this.destination_address != "") {
			this.form.controls.tx_destination.setValue(this.destination_address);
			this.hasDestination = true;
		}

		

	}

	createForm() {
		this.form = this.fb.group({
			tx_destination: ['', Validators.required],
			tx_value: ['', Validators.required],
			tx_fee: ['.0002', Validators.required]
		});
	}

	onSubmit() {
		this.error_message = ""
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}
		if (this.api_data.confirmed_balance < this.form.controls.tx_value.value + this.form.controls.tx_fee.value) {
			return;
		}

		// when called from job
		if (this.fromJob) {
			this.auth.transactionFromJob(this.source_job, this.destination_comment._id, this.form.controls.tx_value.value, this.form.controls.tx_fee.value)
			.subscribe( res => {
				this.confirmed = true;
				this.txid = res.txid		
			}, (err) => {
				console.log("err")
				this.error_message = err.error.message;
				console.error(err);
			});	
		// when called from comment
		} else {
			this.auth.transactionFromUser(this.user._id, this.form.controls.tx_destination.value, this.form.controls.tx_value.value, this.form.controls.tx_fee.value)
			.subscribe( res => {
				this.confirmed = true;
				this.txid = res.txid
			}, (err) => {
				console.log(err)
				this.error_message = err.error.message;
				console.error(err);
			});	
		}
	}  
}