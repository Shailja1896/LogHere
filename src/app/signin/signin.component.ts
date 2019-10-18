import { Component, OnInit } from '@angular/core';
import { SignInService } from '../services/sigin.service';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private isUserLoggedIn: boolean;
  private signInForm: FormGroup;
  private showErrorMsg: boolean;
  private loginCred = {
    name: 'shailja1996',
    password: 'Test@123'
  };

  constructor(private configSer: ConfigService, private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get firstName() { return this.signInForm.get('username'); }
  get middleName() { return this.signInForm.get('password'); }

  login() {
    if (this.signInForm.value.username === this.loginCred.name && this.signInForm.value.password === this.loginCred.password) {
      this.showErrorMsg = false;
      this.configSer.isLoggedIn = true;
      localStorage.setItem('username', 'shailja');
      this.router.navigate(['/my-profile']);
    } else {
      this.showErrorMsg = true;
    }

  }

}
