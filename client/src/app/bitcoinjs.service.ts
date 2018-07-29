import { Observable } from 'rxjs/Rx';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import 'rxjs/add/operator/map';

@Injectable()
export class BitcoinJSService {

	apiUrl = 'http://localhost:3000/api/maketx';

	constructor(private http: Http, private router: Router, private auth: AuthenticationService) {}

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