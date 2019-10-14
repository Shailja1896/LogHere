import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './app.service';
import { SigninComponent } from './signin/signin.component';
import { SignInService } from './services/sigin.service';
import { ConfigService } from './services/config.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyErrorDirective } from './directives/highlighrEroor';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/my-profile',
  pathMatch: 'full'
},
{
  path: 'signin',
  component: SigninComponent,
  canActivate: [SignInService]
},
{
  path: 'my-profile',
  component: MyProfileComponent,
  canActivate: [AuthguardService]
}];


@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    SigninComponent,
    MyErrorDirective
    NotificationSidebarComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes, {
    //   enableTracing: true
    // }),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CookieService,
    AuthguardService,
    SignInService,
    ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
