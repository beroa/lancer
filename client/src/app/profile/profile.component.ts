import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { BtcApiService } from '../btcapiservice.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;
  balance: 0;
  apiResponse: string;

  constructor(private auth: AuthenticationService, private btcapi: BtcApiService) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;

      this.btcapi.address(this.details.address).subscribe(res => {
        this.apiResponse = res;
        }, (err) => {
          console.error(err);
      });
    }, (err) => {
      console.error(err);
    });


  }
}
