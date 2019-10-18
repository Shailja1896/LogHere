import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private showButton: boolean;
  private navList = ['/'];
  constructor(private cookieSer: CookieService, private router: Router) { }
  ngOnInit() {
    this.showButton = true;
    this.cookieSer.set('name', 'shailja');
    const test = this.cookieSer.get('name');
    const test1 = this.cookieSer.getAll();
  }

  navigate() {
    this.showButton = false;
    this.router.navigate(['/my-profile']);
  }
}
