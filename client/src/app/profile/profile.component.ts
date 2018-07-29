import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { BlockExplorerService } from '../blockexplorer.service';

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	details: any;
	balance: 0;
	isWithdrawing = false;

	api_data: any = {};

	constructor(
		private auth: AuthenticationService,
		private blockexplorer: BlockExplorerService
	) { }
	
	ngOnInit() {    
		this.auth.profile().subscribe(user => {
			this.details = user;

			this.blockexplorer.get_addr(this.details.address).subscribe(res => {
				this.api_data = res;
			})

		}, (err) => {
			console.error(err);
		});
	}

	withdrawal() {
      this.isWithdrawing = !this.isWithdrawing;
  }

	// getApiData() {
	//   console.log(this.address_url + this.details.address);
	//   return this.http.get(this.address_url + this.details.address).map((res: Response) => res.json())
	// }

	// readApiData() {
	//   this.getApiData().subscribe(data => {
	//     console.log(data);
	//     this.api_data = data;
	//   })
	// }

}
