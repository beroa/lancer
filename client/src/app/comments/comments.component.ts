import { Response } from '@angular/http';
import { CommentService } from '../comment.service';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import CommentModel from '../models/comment';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
	constructor(
		private auth: AuthenticationService,
		private commentService: CommentService,
		private router: Router,
		private route: ActivatedRoute
	) { }

  	public isLoggedIn = this.auth.isLoggedIn();
	jobId: string;
	private sub: any;
	commentList: CommentModel[];
	public newComment: CommentModel = new CommentModel()

	ngOnInit(): void {
		this.sub = this.route.params.subscribe(params => {
			this.jobId = params['id'];
	    	console.log('loading comments: '+ this.jobId);
	    	if (this.isLoggedIn) {
	    		this.newComment.jobId = this.jobId;
	    		this.newComment.author = this.auth.getUserDetails().name;
	    	}
	    });

	    this.commentService.getComments(this.jobId)
	      .subscribe(comments => {
	        this.commentList = comments.commentList
	        console.log('comments: ' + this.commentList);
	    });
  }

  postComment() {
  	console.log("posting comment" + this.newComment.content);
  	this.commentService.postComment(this.newComment)
      .subscribe((res) => {
        this.router.navigate(['/job/' + this.jobId]);
    });

    this.commentService.getComments(this.jobId)
	      .subscribe(comments => {
	        this.commentList = comments.commentList
	        console.log('comments: ' + this.commentList);
	    });

  }

}
