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

  constructor(private configSer: ConfigService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    debugger;
    this.configSer.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

}
