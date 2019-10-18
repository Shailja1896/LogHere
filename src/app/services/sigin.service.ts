import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable()

export class SignInService {

    constructor(private router: Router, private config: ConfigService) { }

    canActivate() {
        const username = localStorage.getItem('username');
        if (username) {
            this.router.navigate(['/my-profile']);
            return false;
        } else {
            return true;
        }
    }

}
