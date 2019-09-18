import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private cookieSer: CookieService) { };
  ngOnInit() {
    this.cookieSer.set('name', 'shailja');
    const test = this.cookieSer.get('name');
    const test1 = this.cookieSer.getAll();
    debugger;
  }
}
