import Job from './models/job';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class JobService {

	api_url = environment.api_url;
	// api_url = 'https://lancerapp.herokuapp.com';
	postUrl = `${this.api_url}/api/post`;
	findUrl = `${this.api_url}/api/find`;
	jobUrl = `${this.api_url}/api/job`;

	constructor(
		private http: HttpClient
	) { }

	createJob(job: Job): Observable<any>{
		return this.http.post(`${this.postUrl}/submit`, job)
		.map(res => {
			return { jobId: res["data"]._id, }
		})
	}

	getJob(id: string): Observable<any>{
		return this.http.get(`${this.jobUrl}/` + id)
		.map(res  => {
			return { job: res["data"] } ;
		})
	}

	getJobs(page: number): Observable<any>{
		return this.http.get(`${this.findUrl}?page=` + page)
		.map(res  => {
			return { jobList: res["data"].docs, pageCount: res["data"].pages} ;
		})
	}

	//Default Error handling method.
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}