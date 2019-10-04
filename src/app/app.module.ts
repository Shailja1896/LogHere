import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [{
  path: 'my-profile',
  component: MyProfileComponent
}];


@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
