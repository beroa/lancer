import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
// import { RequestOptions, Request, RequestMethod } from '@angular/http-client';
import { environment } from '../environments/environment';

// decoded token
export interface UserDetails {
	_id: string;
	name: string;
	exp: number;
	iat: number;
}

interface TokenResponse {
	token: string;
}

export interface TokenPayload {
	name: string;
	password: string;
}

var apiUrl = environment.api_url + '/api';

@Injectable()
export class AuthenticationService {
	private token: string;

	constructor(private http: HttpClient, private router: Router) {}

	private saveToken(token: string): void {
		localStorage.setItem('mean-token', token);
		this.token = token;
	}

	private getToken(): string {
		if (!this.token) {
			this.token = localStorage.getItem('mean-token');
		}
		return this.token;
	}

	public getUserDetails(): UserDetails {
		const token = this.getToken();
		// console.log("getuserdetails: " + token);
		let payload;
		if (token) {
			payload = token.split('.')[1];
			payload = window.atob(payload);
			return JSON.parse(payload);
		} else {
			return null;
		}
	}

	public isLoggedIn(): boolean {
		const user = this.getUserDetails();
		// console.log("isloggedin: " + user);
		if (user) {
			return user.exp > Date.now() / 1000;
		} else {
			return false;
		}
	}

	private request(method: 'post'|'get', type: 'login'|'register'|'profile'|'maketx', user?: TokenPayload): Observable<any> {
		let base;
		if (method === 'post') {
			base = this.http.post(`${apiUrl}/${type}`, user);
		} else {
			base = this.http.get(`${apiUrl}/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});      
		}
		
		const request = base.pipe(
			map((data: TokenResponse) => {
				if (data.token) {
					this.saveToken(data.token);
				}
				return data;
			})
		);
		return request;
	}

	public register(user: TokenPayload): Observable<any> {
		return this.request('post', 'register', user);
	}

	public login(user: TokenPayload): Observable<any> {
		return this.request('post', 'login', user);
	}

	public profile(): Observable<any> {
		return this.request('get', 'profile');
	}

	public transactionFromUser(user, destination, quantity, fee): Observable<any> {
		let base = this.http.get(`${apiUrl}/usersend`, { 
			headers: { 
				Authorization: `Bearer ${this.getToken()}`
			},
			params: { 
				user: `${user}`,
				destination: `${destination}`, 
				quantity: `${quantity}`,
				fee: `${fee}`}
			});

		const request = base.pipe(
			map((data: TokenResponse) => {
				if (data.token) {
					this.saveToken(data.token);
				}
				return data;
			})
		);
		return request;
	}

	public transactionFromJob(job_id, comment_id, quantity, fee): Observable<any> {
		let base = this.http.get(`${apiUrl}/job/${job_id}/jobSend`, { 
			headers: { 
				Authorization: `Bearer ${this.getToken()}`
			},
			params: { 
				job_id:`${job_id}`,
				comment_id: `${comment_id}`,
				// destination_user: `${destination_user}`, 
				quantity: `${quantity}`,
				fee: `${fee}`}
			});

		const request = base.pipe(
			map((data: TokenResponse) => {
				if (data.token) {
					this.saveToken(data.token);
				}
				return data;
			})
		);
		return request;
	}

	// public jobSend(job, destination, comment): Observable<any> {
	// 	const httpOptions = {
	// 	  headers: new HttpHeaders({
	// 	    'Content-Type':  'application/json',
	// 	    'Authorization': `Bearer ${this.getToken()}`
	// 	  })
	// 	};

	// 	let data = { 
	// 		job_id: `${job}`,
	// 		comment_id: `${comment}`,
	// 		destination: `${destination}`
	// 	};

	// 	return this.http.post(`${apiUrl}/job/${job}/pay`, data, httpOptions
	// 	).map(res => {
	// 		return { res }
	// 	})
	// }

	public logout(): void {
		this.token = '';
		window.localStorage.removeItem('mean-token');
		this.router.navigateByUrl('/');
	}

}
