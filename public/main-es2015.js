(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/app.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"root\">\n\t<div class=\"navbar navbar-inverse\">\n\t\t<div class=\"container\">\n\t\t\t<div id=\"navbar-main\">\n\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li><a routerLink=\"/find\">Find</a></li>\n\t\t\t\t\t<li><a routerLink=\"/post\">Post</a></li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li *ngIf=\"!auth.isLoggedIn()\"><a routerLink=\"/register\">Register</a></li>\n\t\t\t\t\t<li *ngIf=\"!auth.isLoggedIn()\"><a routerLink=\"/login\">Log In</a></li>\n\t\t\t\t\t<li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\">My Profile</a></li>\n\t\t\t\t\t<li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/\" (click)=\"auth.logout()\">Logout</a></li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/comments/comments.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/comments/comments.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col-md-1\"></div>\r\n\t  <div class=\"col-md-10\">\r\n\t  \t<div id=\"comments-frame\">\r\n \r\n \t\t\t<!--new comment-->\r\n\t\t  \t<form [formGroup]=\"form\" class=\"comment-form\" (submit)=\"onSubmit()\">\r\n\t\t        <label for=\"\">New Comment</label>\r\n\t\t        <div *ngIf=\"!isLoggedIn\" class=\"message-login\" >\r\n\t    \t\t\t<p>To post a comment, you must <a routerLink=\"/login\">log in</a> or <a routerLink=\"/register\">register</a>.</p>\r\n\t  \t\t\t</div>\r\n\t  \t\t\t<div *ngIf=\"isLoggedIn\">\r\n\t  \t\t\t\t<div class=\"form-group\">\r\n\t\t\t        \t<textarea type=\"text\" class=\"form-control\" name=\"content\" placeholder=\"Enter Your Comment\" formControlName=\"content\"></textarea>\r\n\t\t\t    \t</div>\r\n\r\n\t\t\t    \t<div class=\"input-group\">\r\n\t\t\t\t\t<input type=\"file\" id=\"image\" (change)=\"onFileChange($event)\" #fileInput>\r\n\t\t\t        <span class=\"input-group-btn\">\r\n\t\t\t        \t<button id=\"comment-post\" type=\"submit\" class=\"btn btn-default btn-comment\">Post Comment</button>\r\n\t    \t\t\t</span>\r\n\t    \t\t</div>\r\n\r\n\t\t    \t</div>\r\n\t      \t</form>\r\n\r\n\t\t\t<!--existing comments-->\r\n\t\t    <div class=\"comments\">\r\n\t\t    \t<!-- <p> {{this.api_data_job.confirmed_balance}}</p> -->\r\n\t\t\t    <ul class=\"comment-list\">\r\n\t\t\t\t\t<li class=\"comment-item\" *ngFor=\"let comment of commentList\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t*ngIf=\"comment.image && comment.image.length > 0\"\r\n\t\t\t\t\t\t[src]=\"showImage(comment)\"\r\n\t\t\t\t\t    alt=\"(submission image)\">\r\n\r\n\t\t\t\t\t\t<div [innerHtml]=\"comment.content\"></div>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<div class=\"comment-bar\">\r\n\t\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td class=\"tleft\">\r\n\t\t\t\t\t\t\t\t\t\t- {{comment.author}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<!-- <td class=\"tright\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"pay\" type=\"submit\" class=\"btn btn-default\" (click)=\"pay()\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"isJobAuthor\"\r\n\t\t\t\t\t\t\t\t\t\tmwlConfirmationPopover\r\n\t\t\t\t\t\t\t\t\t\t[popoverTitle]=\"popoverTitle\"\r\n\t\t\t\t\t\t\t\t\t\tplacement=\"left\"\r\n\t\t\t\t\t\t\t\t\t\t(confirm)=\"paySubmission(comment)\"\r\n\t\t\t\t\t\t\t\t\t\t(cancel)=\"cancelClicked = true\"\r\n\t\t\t\t\t\t\t\t\t\t[popoverMessage]=\"popoverMessage\">Pay</button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"reply\"> Reply </span>\r\n\t\t\t\t\t\t\t\t\t</td> -->\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr> This comment earned {{comment.earned}}</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t\t<div id=\"payMe\" *ngIf=\"isJobAuthor\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"pay(comment)\" [disabled]=\"confirmed\">Pay Me</button>\r\n\t\t\t\t\t\t\t\t<app-transaction *ngIf=\"payOpenFor == comment._id\" [source_job]=\"jobId\" [destination_comment]=\"comment\" [api_data_job]=\"api_data_job\"></app-transaction>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t    </ul>\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t</div>\r\n  <div class=\"col-md-1\"></div>\r\n</div>"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/findjob/findjob.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/findjob/findjob.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1\"></div>\r\n\t\t<div class=\"col-md-10\">\r\n\t\t\r\n\t\t\t<div class=\"pages\">\r\n\t\t\t\tPage: {{pageNumber}}\r\n\t\t\t\t<span class=\"page-number\" *ngFor=\"let page of countPages()\" (click)=\"changePage(page)\">\r\n\t\t\t\t\t{{page}}\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"jobs\">\r\n\t\t\t\t<ul class=\"job-list\">\r\n\t\t\t\t\t<li class=\"job-item\" *ngFor=\"let job of jobList\">\r\n\t\t\t\t\t\t<a class=\"job-title\" (click)=\"goToJob(job._id)\">\r\n\t\t\t\t\t\t\t{{job.title}}\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<span class=\"job-date\">\r\n\t\t\t\t\t\t\t{{job.date_created}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<p class=\"job-description\" [innerHtml]=\"job.description\">\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t    </div>\r\n\t</div>\r\n  <div class=\"col-md-1\"></div>\r\n</div>"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/home/home.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\t<div class=\"row\">\n\t<div class=\"col-md-2\"></div>\n\t<div class=\"col-md-8\">\n  \t\t<h1>this is the home page</h1>\n  \t</div>\n  \t<div class=\"col-md-2\"></div>\n</div> -->"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/job/job.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/job/job.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1\"></div>\r\n\t\t<div class=\"col-md-10\">\t      \r\n\t\t\t<div class=\"listing\">\r\n\r\n\t\t\t\t<div class=\"job-title\">\r\n\t\t\t\t\t<p> {{job?.title}} </p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"job-description\" [innerHtml]=\"job?.description\"></div>\r\n\r\n\t\t\t\t<hr>\r\n\r\n\t\t\t\t<p> <b>Date created:</b> {{job?.date_created}} </p>\r\n\t\t\t\t<p> <b>Created by:</b> {{job?.author}} </p>\r\n\t\t\t\t<p> <b>Address:</b>\r\n\t\t\t\t\t<a href=\"https://chain.so/address/BTCTEST/{{job?.address}}\">{{ job?.address }}</a>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<b>Balance:</b>\r\n\t\t\t\t\t<span *ngIf=\"api_data_job\">{{ api_data_job.confirmed_balance*1 }} tBTC</span>\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<b>Unconfirmed Balance: </b>\r\n\t\t\t\t\t<span *ngIf=\"api_data_job\">{{ api_data_job.confirmed_balance*1 + api_data_job.unconfirmed_balance*1 }} tBTC</span>\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<div id=\"jobAdmin\" *ngIf=\"isJobAuthor\">\r\n\t\t\t\t\t<p>this is your job</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div id=\"fundMe\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"fundMe()\" [disabled]=\"confirmed\">Fund Me</button>\r\n\t\t\t\t\t<app-transaction *ngIf =\"isFundingOpen\" [destination_address]=\"job.address\"></app-transaction>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t</div>\r\n\t<div class=\"col-md-1\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"comments\">\r\n\t<app-comments [api_data_job]=\"api_data_job\"></app-comments>\r\n</div>"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/login/login.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"></div>\n\t\t<div class=\"col-md-8\">\n\n\t\t\t<h1 class=\"form-signin-heading\">Sign in</h1>\n\t\t\t<p class=\"lead\">Not a member? <a routerLink=\"/register\">Register</a> an account.</p>\n\t\n\t\t\t<form (submit)=\"login()\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Username</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your username\" [(ngModel)]=\"credentials.name\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Enter your password\" [(ngModel)]=\"credentials.password\">\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<div class=\"col-md-2\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/postjob/postjob.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/postjob/postjob.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"></div>\n\t\t<div class=\"col-md-8\">\n\n\t\t\t<div class=\"message-login\" *ngIf=\"!isLoggedIn\">\n\t\t\t\t<p>To make a submission, you must <a routerLink=\"/login\">log in</a> or <a routerLink=\"/register\">register</a>.</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-newjob\" *ngIf=\"isLoggedIn\">\n\t\t\t\t<h1 class=\"form-newjob-heading\">New Submission</h1>\n\n\t\t\t\t<form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"Title\">Title</label>\n\t\t\t\t\t\t<input class=\"form-control\" name=\"title\" placeholder=\"Title of the job\" formControlName=\"title\">\n\t\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.title.errors?.required && (form.controls.title.dirty || form.controls.title.touched)\">Submission title is required.</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">Description</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" name=\"description\" placeholder=\"Description of the job\" formControlName=\"description\"></textarea>\n\t\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.description.errors?.required && (form.controls.description.dirty || form.controls.description.touched)\">Submission description is required.</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">Create Job</button>\n\t\t\t\t</form>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\"></div>\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2\"></div>\r\n\t\t <div class=\"col-md-8\">\r\n\r\n\t\t\t<h1 class=\"form-signin-heading\">My Profile</h1>\r\n\r\n\t\t\t<div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">Username:</label>\r\n\t\t\t\t\t<span class=\"form-control-static\">{{ profile?.name }}</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">Public Address:</label>\r\n\t\t\t\t\t<a href=\"https://chain.so/address/BTCTEST/{{ profile?.address }}\">{{ profile?.address }}</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">WIF:</label>\r\n\t\t\t\t\t<span class=\"form-control-static\">{{ profile?.WIF }}</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">Balance: </label>\r\n\t\t\t\t\t<span class=\"form-control-static\">{{ api_data.confirmed_balance*1 }} tBTC</span>\r\n\t\t\t\t\t<!-- <span class=\"form-control-static-red\" *ngIf=\"!api_data.balance\">Error: Could not connect to Blockexplorer.</span> -->\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">Unconfirmed Balance: </label>\r\n\t\t\t\t\t<span class=\"form-control-static\">{{ api_data.confirmed_balance*1 + api_data.unconfirmed_balance*1 }} tBTC</span>\r\n\t\t\t\t\t<!-- <span class=\"form-control-static-red\" *ngIf=\"!api_data.balance\">Error: Could not connect to Blockexplorer.</span> -->\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"withdrawal\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"withdrawal()\" [disabled]=\"confirmed\">Withdraw</button>\r\n\t\t\t\t\t<app-transaction *ngIf =\"isWithdrawing\"></app-transaction>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2\"></div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/register/register.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"></div>\n\t\t<div class=\"col-md-8\">\n\n\t\t\t<h1>Register</h1>\n\t\t\t<p class=\"lead\">Already a member? <a routerLink=\"/login\">Log in</a> instead.</p>\n\n\t\t\t<form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Username</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your username\" formControlName=\"name\">\n\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.name.errors?.required && (form.controls.name.dirty || form.controls.name.touched)\">Username is required.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Enter your password\"  formControlName=\"password\">\n\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.password.errors?.required && (form.controls.password.dirty || form.controls.password.touched)\">Password is required</p>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">Register!</button>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class=\"col-md-2\"></div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/transaction/transaction.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader!./src/app/transaction/transaction.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"transaction\">\r\n\t<!-- make sure we got the data -->\r\n\t<div>\r\n\t\t<p *ngIf=\"!isLoggedIn\" class=\"message-login\">To make a contribution, you must <a routerLink=\"/login\">log in</a> or <a routerLink=\"/register\">register</a>.</p>\r\n\r\n\t\t<p *ngIf=\"isLoggedIn && api_data && api_data.confirmed_balance == 0\" class=\"red-text\">Your account balance is zero. Visit your <a routerLink=\"/profile\">profile</a> to add funds.</p>\r\n\t\t<p *ngIf=\"!api_data\" class=\"red-text\">Error: User account data could not be loaded. Try again later.</p>\r\n\t\t\r\n\r\n\t\t\r\n\t</div>\r\n\r\n\t<div *ngIf=\"isLoggedIn && api_data.confirmed_balance\">\r\n\r\n\t\t<form [formGroup]=\"form\" (submit)=\"onSubmit()\">\r\n\r\n\t\t\t<p class=\"form-group\" *ngIf=\"api_data.confirmed_balance\">\r\n\t\t\t\t<b>Your <span *ngIf=\"fromJob\">job</span> account balance: </b> {{ api_data.confirmed_balance*1 }} tBTC\r\n\t\t\t</p>\r\n\r\n\t\t\t<p class=\"form-group\" *ngIf=\"api_data.unconfirmed_balance\">\r\n\t\t\t\t<b>Your unconfirmed <span *ngIf=\"fromJob\">job</span> account balance: </b>\r\n\t\t\t{{api_data.confirmed_balance*1 + api_data.unconfirmed_balance*1}} tBTC</p>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"tx_value\">Amount to send (in tBTC):</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"tx_value\" placeholder=\"1\"  formControlName=\"tx_value\">\r\n\t\t\t\t<p class=\"red-text\" *ngIf=\"form.controls.tx_value.errors?.required && (form.controls.tx_value.dirty || form.controls.tx_value.touched)\">Amount is required</p>\r\n\t\t\t\t<p class=\"red-text\" *ngIf=\"api_data.confirmed_balance < (form.controls.tx_value.value + form.controls.tx_fee.value)\">Total amount cannot be greater than your account balance.</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"tx_fee\">Transaction fees:</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"tx_fee\" placeholder=\".0001\"  formControlName=\"tx_fee\">\r\n\t\t\t\t<p class=\"red-text\" *ngIf=\".01 <= form.controls.tx_fee.value\">Fees must be <= .01</p>\r\n\t\t\t\t<p class=\"red-text\" *ngIf=\".0001 >= form.controls.tx_fee.value\">Fees must be >= .0001</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"!hasDestination\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"tx_destination\">Destination Address:</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"tx_destination\" formControlName=\"tx_destination\">\r\n\t\t\t\t\t<p class=\"red-text\" *ngIf=\"form.controls.tx_destination.errors?.required && (form.controls.tx_destination.dirty || form.controls.tx_destination.touched)\">Destination is required</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"hasDestination && !fromJob\">\r\n\t\t\t\t<p> <b>Destination Address:</b> {{destination_address}} </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"fromJob\">\r\n\t\t\t\t<p> <b>Destination User:</b> {{destination_comment.author}} </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div>\r\n\t\t\t\t<p> <b>Total Amount:</b> {{(form.controls.tx_fee.value*1) + (form.controls.tx_value.value*1)}} </p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">Send Transaction</button>\r\n\r\n\t\t\t<div class=\"confirmation\">\r\n\t\t\t\t<p class=\"red-text\" *ngIf=\"confirmed && txid == 0\">Your transaction could not be sent.</p>\r\n\t\t\t\t<p class=\"form-success\" *ngIf=\"confirmed && txid != 0\">Success! txid: <a href=\"https://chain.so/tx/BTCTEST/{{ txid }}\"> {{txid}} </a></p>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#root {\n\tbackground: #2c2c2f;\n}\n\n#navbar-main {\n\tfont-size: 1em;\n\tfont-weight:bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdCB7XG5cdGJhY2tncm91bmQ6ICMyYzJjMmY7XG59XG5cbiNuYXZiYXItbWFpbiB7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRmb250LXdlaWdodDpib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./postjob/postjob.component */ "./src/app/postjob/postjob.component.ts");
/* harmony import */ var _findjob_findjob_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./findjob/findjob.component */ "./src/app/findjob/findjob.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./job.service */ "./src/app/job.service.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _blockexplorer_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blockexplorer.service */ "./src/app/blockexplorer.service.ts");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");























const routes = [
    { path: '', component: _findjob_findjob_component__WEBPACK_IMPORTED_MODULE_12__["FindJobComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]] },
    { path: 'post', component: _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_11__["PostJobComponent"] },
    { path: 'find', component: _findjob_findjob_component__WEBPACK_IMPORTED_MODULE_12__["FindJobComponent"] },
    { path: 'job/:id', component: _job_job_component__WEBPACK_IMPORTED_MODULE_16__["JobComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_11__["PostJobComponent"],
            _findjob_findjob_component__WEBPACK_IMPORTED_MODULE_12__["FindJobComponent"],
            _job_job_component__WEBPACK_IMPORTED_MODULE_16__["JobComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_17__["CommentsComponent"],
            _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_21__["TransactionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_20__["ConfirmationPopoverModule"].forRoot({ confirmButtonType: 'danger' })
        ],
        providers: [
            _authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
            _job_service__WEBPACK_IMPORTED_MODULE_15__["JobService"],
            _comment_service__WEBPACK_IMPORTED_MODULE_18__["CommentService"],
            _blockexplorer_service__WEBPACK_IMPORTED_MODULE_19__["BlockExplorerService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
};
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm2015/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





// import { RequestOptions, Request, RequestMethod } from '@angular/http-client';

var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + '/api';
let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveToken(token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        // console.log("getuserdetails: " + token);
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        // console.log("isloggedin: " + user);
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    request(method, type, user) {
        let base;
        if (method === 'post') {
            base = this.http.post(`${apiUrl}/${type}`, user);
        }
        else {
            base = this.http.get(`${apiUrl}/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
        }
        const request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
    register(user) {
        return this.request('post', 'register', user);
    }
    login(user) {
        return this.request('post', 'login', user);
    }
    profile() {
        return this.request('get', 'profile');
    }
    transactionFromUser(user, destination, quantity, fee) {
        let base = this.http.get(`${apiUrl}/usersend`, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            },
            params: {
                user: `${user}`,
                destination: `${destination}`,
                quantity: `${quantity}`,
                fee: `${fee}`
            }
        });
        const request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
    transactionFromJob(job_id, comment_id, quantity, fee) {
        let base = this.http.get(`${apiUrl}/job/${job_id}/jobSend`, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            },
            params: {
                job_id: `${job_id}`,
                comment_id: `${comment_id}`,
                // destination_user: `${destination_user}`, 
                quantity: `${quantity}`,
                fee: `${fee}`
            }
        });
        const request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
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
    logout() {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/blockexplorer.service.ts":
/*!******************************************!*\
  !*** ./src/app/blockexplorer.service.ts ***!
  \******************************************/
/*! exports provided: BlockExplorerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockExplorerService", function() { return BlockExplorerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");

// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Http } from '@angular/http';
// import { Response } from '@angular/http';




let BlockExplorerService = class BlockExplorerService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.api_url = 'https://chain.so/api/v2';
        this.address_balance_url = `${this.api_url}/get_address_balance/BTCTEST/`;
    }
    get_addr(address) {
        return this.http.get(this.address_balance_url + address);
    }
    //Default Error handling method.
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
BlockExplorerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], BlockExplorerService);



/***/ }),

/***/ "./src/app/comment.service.ts":
/*!************************************!*\
  !*** ./src/app/comment.service.ts ***!
  \************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");


// import { Response } from '@angular/http';



let CommentService = class CommentService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
        this.jobUrl = `${this.api_url}/api/job`;
    }
    postComment(comment) {
        var jobId = comment.jobId;
        return this.http.post(`${this.jobUrl}/` + jobId + "/comments/submit", comment)
            .map(res => {
            return { commentId: res["data"]._id, };
        });
    }
    getComments(jobId) {
        return this.http.get(`${this.jobUrl}/` + jobId + "/comments")
            .map(res => {
            return { commentList: res["data"] };
        });
    }
    //Default Error handling method.
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CommentService);



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-form {\r\n\tmargin: .5em 0;\r\n\tpadding: .5em 1em;\r\n}\r\n\r\n.btn-comment {\r\n\tmargin-top: auto;\r\n}\r\n\r\n.comment-list {\r\n\tlist-style: none;\r\n\tmargin-left: -40px;\r\n}\r\n\r\n.comment-item {\r\n\tborder: 1px solid #CCCCCC;\r\n\tbackground: #ebdcc6;\r\n\tmargin: .5em 0;\r\n\tpadding: .5em 1em;\r\n}\r\n\r\n.comment-content p {\r\n\tfont-size:18px;\r\n\tpadding-left: 1em;\r\n}\r\n\r\n.comment-bar {\r\n\tborder-top: 1px solid #EEEEEE;\r\n\tmargin-top: -20px;\r\n}\r\n\r\ntable {\r\n\twidth: 100%;\r\n}\r\n\r\n.tleft {\r\n\ttext-align: left;\r\n}\r\n\r\n.tright {\r\n\ttext-align: right;\r\n}\r\n\r\n#comments-frame {\r\n\t/*background: #edf8f0;*/\r\n\tmargin-top:2em;\r\n\tborder: 2px solid #CCCCCC;\r\n}\r\n\r\n#comment-post{\r\n\tfloat: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsY0FBYztDQUNkLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1mb3JtIHtcclxuXHRtYXJnaW46IC41ZW0gMDtcclxuXHRwYWRkaW5nOiAuNWVtIDFlbTtcclxufVxyXG5cclxuLmJ0bi1jb21tZW50IHtcclxuXHRtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0IHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdG1hcmdpbi1sZWZ0OiAtNDBweDtcclxufVxyXG4uY29tbWVudC1pdGVtIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG5cdGJhY2tncm91bmQ6ICNlYmRjYzY7XHJcblx0bWFyZ2luOiAuNWVtIDA7XHJcblx0cGFkZGluZzogLjVlbSAxZW07XHJcbn1cclxuLmNvbW1lbnQtY29udGVudCBwIHtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLmNvbW1lbnQtYmFyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI0VFRUVFRTtcclxuXHRtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi50bGVmdCB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udHJpZ2h0IHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuI2NvbW1lbnRzLWZyYW1lIHtcclxuXHQvKmJhY2tncm91bmQ6ICNlZGY4ZjA7Ki9cclxuXHRtYXJnaW4tdG9wOjJlbTtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjQ0NDQ0NDO1xyXG59XHJcblxyXG4jY29tbWVudC1wb3N0e1xyXG5cdGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/comment */ "./src/app/models/comment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CommentsComponent = class CommentsComponent {
    constructor(auth, commentService, jobService, router, route, fb) {
        this.auth = auth;
        this.commentService = commentService;
        this.jobService = jobService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.api_data_job = {};
        this.isLoggedIn = this.auth.isLoggedIn();
        this.isJobAuthor = false;
        this.newComment = new _models_comment__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.payOpenFor = "";
        this.popoverTitle = 'Select For Payment';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.createForm();
        this.newComment = new _models_comment__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
    ngOnInit() {
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
            this.commentList = comments.commentList;
        });
    }
    createForm() {
        this.form = this.fb.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
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
            this.commentList = comments.commentList;
        });
    }
    showImage(comment) {
        return 'data:' + comment.image_type + ';base64,' + comment.image;
    }
    pay(selectedComment) {
        if (this.payOpenFor == "") {
            this.payOpenFor = selectedComment._id;
        }
        else {
            this.payOpenFor = "";
        }
        console.log(this.api_data_job.confirmed_balance);
        // this.popoverMessage = "Are you sure you want this user to recieve your job's funds " + this.api_data_job.confirmed_balance*1 + " tBTC)?";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CommentsComponent.prototype, "api_data_job", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('fileInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], CommentsComponent.prototype, "fileInput", void 0);
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-comments',
        template: __webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/comments/comments.component.html"),
        styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"],
        _job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], CommentsComponent);

// (user, job, destination, quantity, fee):


/***/ }),

/***/ "./src/app/findjob/findjob.component.css":
/*!***********************************************!*\
  !*** ./src/app/findjob/findjob.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-list {\r\n\tlist-style: none;\r\n\tmargin-left: -40px;\r\n}\r\n\r\n.job-item {\r\n\tborder: 2px solid #CCCCCC;\r\n\tbackground: #edf8f0;\r\n\tmargin: .5em 0;\r\n\tpadding: 1em 1em;\r\n\t/*padding-left: 40px;*/\r\n}\r\n\r\n.job-title {\r\n\tfont-size: 30px;\r\n}\r\n\r\n.job-description {\r\n\tfont-size: 18px;\r\n}\r\n\r\n.job-date {\r\n\tfloat:right;\r\n}\r\n\r\n.page-number {\t\r\n\tdisplay:inline-block;\r\n\ttext-align:center;\r\n\tborder:1px solid #CCCCCC;\r\n\tbackground: #FAFAFA;\r\n\tmargin-right:5px;\r\n\tpadding:0 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZGpvYi9maW5kam9iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9maW5kam9iL2ZpbmRqb2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2ItbGlzdCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRtYXJnaW4tbGVmdDogLTQwcHg7XHJcbn1cclxuXHJcbi5qb2ItaXRlbSB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI0NDQ0NDQztcclxuXHRiYWNrZ3JvdW5kOiAjZWRmOGYwO1xyXG5cdG1hcmdpbjogLjVlbSAwO1xyXG5cdHBhZGRpbmc6IDFlbSAxZW07XHJcblx0LypwYWRkaW5nLWxlZnQ6IDQwcHg7Ki9cclxufVxyXG5cclxuLmpvYi10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uam9iLWRlc2NyaXB0aW9uIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5qb2ItZGF0ZSB7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi5wYWdlLW51bWJlciB7XHRcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3JkZXI6MXB4IHNvbGlkICNDQ0NDQ0M7XHJcblx0YmFja2dyb3VuZDogI0ZBRkFGQTtcclxuXHRtYXJnaW4tcmlnaHQ6NXB4O1xyXG5cdHBhZGRpbmc6MCA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/findjob/findjob.component.ts":
/*!**********************************************!*\
  !*** ./src/app/findjob/findjob.component.ts ***!
  \**********************************************/
/*! exports provided: FindJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindJobComponent", function() { return FindJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// import { Response } from '@angular/http';



let FindJobComponent = class FindJobComponent {
    constructor(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.jobService.getJobs(this.pageNumber)
            .subscribe(jobs => {
            this.jobList = jobs.jobList;
            this.pageCount = jobs.pageCount;
        });
    }
    goToJob(jobId) {
        this.router.navigate(['/job/' + jobId]);
    }
    changePage(newPage) {
        this.jobService.getJobs(newPage)
            .subscribe(jobs => {
            this.jobList = jobs.jobList;
            this.pageCount = jobs.pageCount;
        });
        this.pageNumber = newPage;
    }
    countPages() {
        var pages = [];
        for (var i = 0; i < this.pageCount; i++) {
            pages.push(i + 1);
        }
        return pages;
    }
};
FindJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-findjob',
        template: __webpack_require__(/*! raw-loader!./findjob.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/findjob/findjob.component.html"),
        styles: [__webpack_require__(/*! ./findjob.component.css */ "./src/app/findjob/findjob.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], FindJobComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/home/home.component.html")
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/job.service.ts":
/*!********************************!*\
  !*** ./src/app/job.service.ts ***!
  \********************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");


// import { Response } from '@angular/http';



let JobService = class JobService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
        this.postUrl = `${this.api_url}/api/post`;
        this.findUrl = `${this.api_url}/api/find`;
        this.jobUrl = `${this.api_url}/api/job`;
    }
    createJob(job) {
        return this.http.post(`${this.postUrl}/submit`, job)
            .map(res => {
            return { jobId: res["data"]._id, };
        });
    }
    getJob(id) {
        return this.http.get(`${this.jobUrl}/` + id)
            .map(res => {
            return { job: res["data"] };
        });
    }
    getJobs(page) {
        return this.http.get(`${this.findUrl}?page=` + page)
            .map(res => {
            return { jobList: res["data"].docs, pageCount: res["data"].pages };
        });
    }
    //Default Error handling method.
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], JobService);



/***/ }),

/***/ "./src/app/job/job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/job.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listing {\r\n\tborder: 2px solid #CCCCCC;\r\n\tbackground: #edf8f0;\r\n\tpadding: 1em;\r\n}\r\n\r\n.job-title {\r\n\tfont-size: 2em;\r\n}\r\n\r\n#fundMe {\r\n\tmargin-top:1em;\r\n}\r\n\r\n.red-text {\r\n\tcolor:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iL2pvYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxTQUFTO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9qb2Ivam9iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGluZyB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI0NDQ0NDQztcclxuXHRiYWNrZ3JvdW5kOiAjZWRmOGYwO1xyXG5cdHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmpvYi10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbiNmdW5kTWUge1xyXG5cdG1hcmdpbi10b3A6MWVtO1xyXG59XHJcblxyXG4ucmVkLXRleHQge1xyXG5cdGNvbG9yOnJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _blockexplorer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockexplorer.service */ "./src/app/blockexplorer.service.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");

// import { Response } from '@angular/http';






let JobComponent = class JobComponent {
    constructor(jobService, route, blockexplorer, fb, auth) {
        this.jobService = jobService;
        this.route = route;
        this.blockexplorer = blockexplorer;
        this.fb = fb;
        this.auth = auth;
        this.api_data_job = {};
        this.isJobAuthor = false;
        this.isFundingOpen = false;
        this.submitted = false;
        this.confirmed = false;
        this.txid = 0;
        this.isLoggedIn = this.auth.isLoggedIn();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.jobId = params['id'];
        });
        // get job
        this.jobService.getJob(this.jobId)
            .subscribe(params => {
            this.job = params.job;
            // get job address balance
            this.blockexplorer.get_addr(this.job.address).subscribe(res => {
                this.api_data_job = res.data;
            });
            // get user
            if (this.isLoggedIn) {
                this.auth.profile().subscribe(user => {
                    this.user = user;
                    if (this.user.name == this.job.author) {
                        this.isJobAuthor = true;
                    }
                });
            }
        });
    }
    fundMe() {
        if (!this.submitted) {
            this.isFundingOpen = !this.isFundingOpen;
        }
    }
};
JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job',
        template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/job/job.component.html"),
        styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/job/job.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _blockexplorer_service__WEBPACK_IMPORTED_MODULE_4__["BlockExplorerService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
], JobComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            name: '',
            password: ''
        };
    }
    login() {
        this.auth.login(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/profile');
        }, (err) => {
            console.error(err);
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/login/login.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/models/comment.ts":
/*!***********************************!*\
  !*** ./src/app/models/comment.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Comment {
    constructor() {
        this.jobId = "";
        this.parentId = "";
        this.content = "";
        this.author = "";
        this.date_created = new Date();
        this.image = "";
        this.image_type = "";
        this.earned = 0;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Comment);


/***/ }),

/***/ "./src/app/models/job.ts":
/*!*******************************!*\
  !*** ./src/app/models/job.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Job {
    constructor() {
        this._id = "";
        this.title = "";
        this.description = "";
        this.author = "";
        this.date_created = new Date();
        this.address = "";
    }
    setAuthor(author) {
        this.author = author;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Job);


/***/ }),

/***/ "./src/app/postjob/postjob.component.css":
/*!***********************************************!*\
  !*** ./src/app/postjob/postjob.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-invalid {\n\tcolor: red;\n}\n\n#message-login {\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdGpvYi9wb3N0am9iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Bvc3Rqb2IvcG9zdGpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0taW52YWxpZCB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbiNtZXNzYWdlLWxvZ2luIHtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/postjob/postjob.component.ts":
/*!**********************************************!*\
  !*** ./src/app/postjob/postjob.component.ts ***!
  \**********************************************/
/*! exports provided: PostJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobComponent", function() { return PostJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
/* harmony import */ var _models_job__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/job */ "./src/app/models/job.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! markdown */ "./node_modules/markdown/lib/index.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(markdown__WEBPACK_IMPORTED_MODULE_8__);









let PostJobComponent = class PostJobComponent {
    constructor(auth, jobService, router, http, fb) {
        this.auth = auth;
        this.jobService = jobService;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.submitted = false;
        this.newJob = new _models_job__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.isLoggedIn = this.auth.isLoggedIn();
        this.jobId = String;
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.postJob();
    }
    postJob() {
        this.newJob.author = this.auth.getUserDetails().name;
        this.newJob.title = this.form.get('title').value;
        this.newJob.description = markdown__WEBPACK_IMPORTED_MODULE_8__["markdown"].toHTML(this.form.get('description').value);
        this.jobService.createJob(this.newJob)
            .subscribe((res) => {
            this.jobId = res.jobId;
            this.router.navigate(['/job/' + this.jobId]);
        });
    }
};
PostJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./postjob.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/postjob/postjob.component.html"),
        styles: [__webpack_require__(/*! ./postjob.component.css */ "./src/app/postjob/postjob.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], PostJobComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n\tmargin-bottom: .75em;\r\n}\r\n\r\n.form-control-static-red {\r\n\tcolor:red;\r\n}\r\n\r\n#withdrawal {\r\n\tpadding-left: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuXHRtYXJnaW4tYm90dG9tOiAuNzVlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1zdGF0aWMtcmVkIHtcclxuXHRjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbiN3aXRoZHJhd2FsIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _blockexplorer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blockexplorer.service */ "./src/app/blockexplorer.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(auth, blockexplorer) {
        this.auth = auth;
        this.blockexplorer = blockexplorer;
        this.isWithdrawing = false;
        this.api_data = {};
    }
    ngOnInit() {
        this.auth.profile().subscribe(res => {
            this.profile = res.profile;
            // console.log("profile: " + JSON.stringify(this.profile));
            // console.log("profile_address: " + this.profile.address);
            this.blockexplorer.get_addr(this.profile.address).subscribe(res => {
                this.api_data = res.data;
            });
        }, (err) => {
            console.error(err);
        });
    }
    withdrawal() {
        this.isWithdrawing = !this.isWithdrawing;
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _blockexplorer_service__WEBPACK_IMPORTED_MODULE_3__["BlockExplorerService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-invalid {\n\tcolor: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnZhbGlkIHtcblx0Y29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let RegisterComponent = class RegisterComponent {
    constructor(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.submitted = false;
        // credentials will recieve values from formbuilder after submit
        this.credentials = {
            name: '',
            password: ''
        };
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid)
            return;
        this.register();
    }
    register() {
        this.credentials.name = this.form.get('name').value;
        this.credentials.password = this.form.get('password').value;
        this.auth.register(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/profile');
        }, (err) => {
            console.error(err);
        });
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/transaction/transaction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/transaction/transaction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#transaction {\r\n\tborder: 2px solid #CCCCCC;\r\n\tpadding: 2em;\r\n\tmargin-top: 1em;\r\n\tbackground: #d0ecd9;\r\n}\r\n\r\n.form-invalid {\r\n\tcolor: red;\r\n}\r\n\r\n.form-success {\r\n\tcolor: green;\r\n}\r\n\r\n.confirmation {\r\n\tmargin-top: .5em;\r\n}\r\n\r\n.red-text {\r\n\tcolor: red;\r\n\tmargin: 0;\r\n}\r\n\r\n.message-login {\r\n\tmargin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxTQUFTO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC90cmFuc2FjdGlvbi90cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RyYW5zYWN0aW9uIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjQ0NDQ0NDO1xyXG5cdHBhZGRpbmc6IDJlbTtcclxuXHRtYXJnaW4tdG9wOiAxZW07XHJcblx0YmFja2dyb3VuZDogI2QwZWNkOTtcclxufVxyXG5cclxuLmZvcm0taW52YWxpZCB7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG5cclxuLmZvcm0tc3VjY2VzcyB7XHJcblx0Y29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uIHtcclxuXHRtYXJnaW4tdG9wOiAuNWVtO1xyXG59XHJcblxyXG4ucmVkLXRleHQge1xyXG5cdGNvbG9yOiByZWQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWVzc2FnZS1sb2dpbiB7XHJcblx0bWFyZ2luOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/transaction/transaction.component.ts ***!
  \******************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _blockexplorer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockexplorer.service */ "./src/app/blockexplorer.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");

// import { Response } from '@angular/http';





let TransactionComponent = class TransactionComponent {
    constructor(route, blockexplorer, fb, auth) {
        this.route = route;
        this.blockexplorer = blockexplorer;
        this.fb = fb;
        this.auth = auth;
        this.fromJob = false; // not called from job page
        this.hasDestination = false; // not called from withdraw
        this.destination_address = "";
        this.api_dataIsJobs = false;
        this.api_data = {};
        this.submitted = false;
        this.confirmed = false;
        this.txid = 0;
        this.createForm();
        this.isLoggedIn = this.auth.isLoggedIn();
    }
    ngOnInit() {
        if (!this.api_data_job) {
            this.fromJob = false;
            this.auth.profile().subscribe(res => {
                this.user = res.profile;
                this.blockexplorer.get_addr(this.user.address).subscribe(res => {
                    this.api_data = res.data;
                });
            });
        }
        else {
            this.fromJob = true;
            this.api_data = this.api_data_job;
            this.form.controls.tx_destination.setValue(this.destination_comment._id);
            this.hasDestination = true;
        }
        if (this.destination_address != "") {
            this.form.controls.tx_destination.setValue(this.destination_address);
            this.hasDestination = true;
        }
    }
    createForm() {
        this.form = this.fb.group({
            tx_destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tx_value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tx_fee: ['.0002', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.api_data.confirmed_balance < this.form.controls.tx_value.value + this.form.controls.tx_fee.value) {
            return;
        }
        // when called from job
        if (this.fromJob) {
            this.auth.transactionFromJob(this.source_job, this.destination_comment._id, this.form.controls.tx_value.value, this.form.controls.tx_fee.value)
                .subscribe(res => {
                console.log(res);
                this.txid = JSON.parse(res).txid;
                this.confirmed = true;
            }, (err) => {
                console.error(err);
            });
            // when called from comment
        }
        else {
            this.auth.transactionFromUser(this.user._id, this.form.controls.tx_destination.value, this.form.controls.tx_value.value, this.form.controls.tx_fee.value)
                .subscribe(res => {
                console.log(res);
                this.txid = JSON.parse(res).txid;
                this.confirmed = true;
            }, (err) => {
                console.error(err);
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TransactionComponent.prototype, "destination_address", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TransactionComponent.prototype, "destination_comment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TransactionComponent.prototype, "source_job", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TransactionComponent.prototype, "api_data_job", void 0);
TransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction',
        template: __webpack_require__(/*! raw-loader!./transaction.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/index.js!./src/app/transaction/transaction.component.html"),
        styles: [__webpack_require__(/*! ./transaction.component.css */ "./src/app/transaction/transaction.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _blockexplorer_service__WEBPACK_IMPORTED_MODULE_4__["BlockExplorerService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], TransactionComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    api_url: "http://localhost:8080"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\lancer\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map