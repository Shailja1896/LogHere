import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class ConfigService {

    public isLoggedIn: boolean;
    constructor(private router: Router) { }
}
