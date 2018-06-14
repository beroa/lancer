import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { CommentDirective } from './comment.directive';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
    CommentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService, 
    AuthGuardService,
    JobService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
