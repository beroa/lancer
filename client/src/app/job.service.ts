import Job from './models/job';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class JobService {

  api_url = 'http://localhost:3000';
  postUrl = `${this.api_url}/api/post`;
  findUrl = `${this.api_url}/api/find`;

  constructor(
    private http: HttpClient
  ) { }

  createJob(job: Job): Observable<any>{
    return this.http.post(`${this.postUrl}/submit`, job);
  }

  getJobs(page: number): Observable<any>{
    return this.http.get(`${this.findUrl}?page=`+page)
    .map(res  => {
      return { jobList: res["data"].docs, pageCount: res["data"].pages} ;
    })
  }

  // //Update job, takes a Job Object as parameter
  // editJob(job:Job){
  //   let editUrl = `${this.postUrl}`
  //   //returns the observable of http put request 
  //   return this.http.put(editUrl, job);
  // }

  // deleteJob(id:string):any{
  //   //Delete the object by the id
  //   let deleteUrl = `${this.postUrl}/${id}`
  //   return this.http.delete(deleteUrl)
  //   .map(res  => {
  //     return res;
  //   })
  // }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}