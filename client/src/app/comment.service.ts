import Comment from './models/comment';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  api_url = 'http://localhost:3000';
  jobUrl = `${this.api_url}/api/job`;

  constructor(
    private http: HttpClient
  ) { }

  postComment(comment: Comment): Observable<any>{
  	var jobId = comment.jobId;
    return this.http.post(`${this.jobUrl}/` + jobId + "/comments/submit", comment)
    .map(res => {
      return { commentId: res["data"]._id, }
    })
  }

  getComments(jobId: string): Observable<any>{
    return this.http.get(`${this.jobUrl}/` + jobId + "/comments")
    .map(res  => {
      return { commentList: res["data"] } ;
    })
  }

  // //Update comment, takes a Comment Object as parameter
  // editComment(comment:Comment){
  //   let editUrl = `${this.postUrl}`
  //   //returns the observable of http put request 
  //   return this.http.put(editUrl, comment);
  // }

  // deleteComment(id:string):any{
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