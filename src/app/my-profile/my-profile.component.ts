import { Component, OnInit } from '@angular/core';
import { SignInService } from '../services/sigin.service';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private configSer: ConfigService,
    private router: Router,
    private siginService: SignInService) { }

  test1 = false;
  showNotificationSidebar: boolean;
  ngOnInit() {
  }

  test() {
    this.test1 = !this.test1;
    this.siginService.canActivate();
  }

  openNotification() {
    this.showNotificationSidebar = true;
  }

  logout() {
    this.configSer.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  closeNotificationSidebar($event: any) {
    this.showNotificationSidebar = false;
  }

}
