import { Response } from '@angular/http';
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
	isDestinationLocked = false;
	private isLoggedIn: boolean;
	api_data_user_addr: any = {};
	@Input() destination? = ""
	form: FormGroup;
	submitted = false;
	confirmed = false;
	user: UserModel;
	txid = 0;
	totalAmount = 0;

	constructor(
		private route: ActivatedRoute,
		private blockexplorer: BlockExplorerService,
		private fb: FormBuilder,
		private auth: AuthenticationService) {
	this.createForm();
	this.isLoggedIn = this.auth.isLoggedIn();
	}

	ngOnInit(): void {
		if (this.destination != "") {
			this.form.controls.tx_destination.setValue(this.destination);
			this.isDestinationLocked = true;
		}

		if (this.isLoggedIn) {
			this.auth.profile().subscribe(res => {
				this.user = res.profile;
				this.blockexplorer.get_addr(this.user.address).subscribe(res => {
					this.api_data_user_addr = res.data;
				})
			})
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
		this.submitted = true;
		if (this.form.invalid) {
			return;
		}
		if (this.api_data_user_addr.balance < this.form.controls.tx_value.value) {
			return;
		}
		this.auth.transaction(this.user._id, this.form.controls.tx_destination.value, this.form.controls.tx_value.value, this.form.controls.tx_fee.value)
		.subscribe( res => {
			console.log(res);
			this.txid = JSON.parse(res).txid;
			this.confirmed = true;
		}, (err) => {
			console.error(err);
		});
	}  
}