import { Observable } from 'rxjs/Rx';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Http } from '@angular/http';
// import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class BitcoinJSService {

	apiUrl = environment.api_url + "/api/maketx";

	constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

	public sendTransaction() {
		// this.auth.transaction().subscribe(res => {
		//     return res;
		// })
	}

	//Default Error handling method.
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}