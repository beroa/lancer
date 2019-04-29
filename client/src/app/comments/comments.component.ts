import { Response } from '@angular/http';
import { CommentService } from '../comment.service';
import { JobService } from '../job.service';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import CommentModel from '../models/comment';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { markdown } from 'markdown';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import JobModel from '../models/job';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
	private form: FormGroup;
	private isLoggedIn = this.auth.isLoggedIn();
	private job: JobModel;
	private jobId: string;
	private isJobAuthor = false;
	private sub: any;
	private commentList: CommentModel[];
	private newComment: CommentModel = new CommentModel();
	private isSelecting = false;

	@Input() api_data_job_addr: any = {};


	public popoverTitle: string = 'Select For Payment';
	public popoverMessage = "Are you sure you want this user to recieve your job's funds (" + this.api_data_job_addr.balance + " tBTC)?\n Your job will be marked complete.";
	public confirmClicked: boolean = false;
	public cancelClicked: boolean = false;

	@ViewChild('fileInput') fileInput: ElementRef;

	ngOnInit(): void {

		this.sub = this.route.params.subscribe(params => {
			this.jobId = params['id'];
			this.jobService.getJob(this.jobId).subscribe(params => {
			    this.job = params.job;
			    if (this.isLoggedIn) {
					this.newComment.jobId = this.jobId;
					this.newComment.author = this.auth.getUserDetails().name;
			
			    	if (this.newComment.author == this.job.author) {
						this.isJobAuthor = true;
					}
				}
			});
		});

		this.commentService.getComments(this.jobId)
		  .subscribe(comments => {
			this.commentList = comments.commentList
		});

	}

	constructor(
		private auth: AuthenticationService,
		private commentService: CommentService,
		private jobService: JobService,
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder) {
	this.createForm();
	this.newComment = new CommentModel();
	}

	
	createForm() {
		this.form = this.fb.group({
			content: ['', Validators.required]
		});
	}

	onFileChange(event) {
	let reader = new FileReader();
	    if(event.target.files && event.target.files.length > 0) {
	      let file = event.target.files[0];
	      reader.readAsDataURL(file);
	      reader.onload = () => {
	      	console.log(file.type);
	      	this.newComment.image_type = file.type;
	      	this.newComment.image = reader.result.split(',')[1];
	      };
	    }
  	}

	onSubmit() {
		this.newComment.content = this.form.get('content').value;
	    this.postComment();
	}

	postComment() {
		this.commentService.postComment(this.newComment)
		  .subscribe((res) => {
		  	this.commentList.push(this.newComment);
		});

		this.commentService.getComments(this.jobId)
			  .subscribe(comments => {
				this.commentList = comments.commentList
			});
	}

	showImage(comment: CommentModel): any {
    	return 'data:'+  comment.image_type + ';base64,' + comment.image;
	}

	select() {
		this.isSelecting = !this.isSelecting;
		console.log(this.api_data_job_addr);
		this.popoverMessage = "Are you sure you want this user to recieve your job's funds (" + this.api_data_job_addr.confirmed_balance + " tBTC)?\n Your job will be marked complete.";
	}

	paySubmission(selectedComment: CommentModel) {
		this.auth.jobComplete(this.job._id, selectedComment.author)
		.subscribe( res => {
			console.log(res);
		}, (err) => {
			console.error(err);
		});
	}

}
