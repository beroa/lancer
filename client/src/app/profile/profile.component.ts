import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { BlockExplorerService } from '../blockexplorer.service';
import UserModel from '../models/user';

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	profile: UserModel;
	balance: 0;
	isWithdrawing = false;

	api_data: any = {};

	constructor(
		private auth: AuthenticationService,
		private blockexplorer: BlockExplorerService
	) { }
	
	ngOnInit() {    
		this.auth.profile().subscribe(res => {
			this.profile = res.profile;
			this.blockexplorer.get_addr(this.profile.address).subscribe(res => {
				this.api_data = res.data;
			})
		}, (err) => {
			console.error(err);
		});
	}

	withdrawal() {
      this.isWithdrawing = !this.isWithdrawing;
  }

}
