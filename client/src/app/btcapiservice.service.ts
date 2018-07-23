import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable()
export class BtcApiService {

  api_url = 'https://tchain.api.btc.com/v3';
  address_url = `${this.api_url}/address/`;

  constructor(private http: HttpClient, private router: Router) {}


  public address(address): Observable<any> {
    console.log(`${this.address_url}/` + address);
    return this.http.get(`${this.address_url}` + address);
  }

  // postComment(comment: Comment): Observable<any>{
  //   var jobId = comment.jobId;
  //   return this.http.post(`${this.jobUrl}/` + jobId + "/comments/submit", comment)
  //   .map(res => {
  //     return { commentId: res["data"]._id, }
  //   })
  // }

  // getComments(jobId: string): Observable<any>{
  //   return this.http.get(`${this.jobUrl}/` + jobId + "/comments")
  //   .map(res  => {
  //     return { commentList: res["data"] } ;
  //   })
  // }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}