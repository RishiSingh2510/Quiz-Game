import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  isLogin: boolean = false
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.isLogin = localStorage.getItem("isLogin") == "1";
  }
  playGame() {
    if (this.isLogin) {
      this.router.navigate(['/Q']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
