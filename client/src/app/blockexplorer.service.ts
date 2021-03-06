import { Observable } from 'rxjs/Rx';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Http } from '@angular/http';
// import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable()
export class BlockExplorerService {

	api_url = 'https://sochain.com/api/v2';
	address_balance_url = `${this.api_url}/get_address_balance/BTCTEST/`;

	constructor(private http: HttpClient, private router: Router) {}

	public get_addr(address): Observable<any> {
		return this.http.get(this.address_balance_url + address)
	}

	//Default Error handling method.
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}