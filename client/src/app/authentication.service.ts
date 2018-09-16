import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

export interface UserDetails {
	_id: string;
	exp: number;
	iat: number;
	name: string;
}

interface TokenResponse {
	token: string;
}

export interface TokenPayload {
	name: string;
	password: string;
}

var apiUrl = 'http://localhost:3000/api';

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

	public transaction(user, destination, quantity): Observable<any> {
		let base = this.http.get(`${apiUrl}/maketx`, { 
			headers: { 
				Authorization: `Bearer ${this.getToken()}`
			},
			params: { 
				user: `${user}`,
				destination: `${destination}`, 
				quantity: `${quantity}`}
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

	public jobComplete(job, destination): Observable<any> {
		let base = this.http.post(`${apiUrl}/job/${job}/complete`, { 
			headers: { 
				Authorization: `Bearer ${this.getToken()}`
			},
			params: { 
				job: `${job}`,
				destination: `${destination}`
			}
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

	public logout(): void {
		this.token = '';
		window.localStorage.removeItem('mean-token');
		this.router.navigateByUrl('/');
	}

}
