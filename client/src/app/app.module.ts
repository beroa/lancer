import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PostJobComponent } from './postjob/postjob.component';
import { FindJobComponent } from './findjob/findjob.component'

import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { JobService } from './job.service';
import { JobComponent } from './job/job.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './comment.service';
import { BlockExplorerService } from './blockexplorer.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: '', component: FindJobComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'post', component: PostJobComponent },
  { path: 'find', component: FindJobComponent },
  { path: 'job/:id', component: JobComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostJobComponent,
    FindJobComponent,
    JobComponent,
    CommentsComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}) 
  ],
  providers: [
    AuthenticationService, 
    AuthGuardService,
    JobService,
    CommentService,
    BlockExplorerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
