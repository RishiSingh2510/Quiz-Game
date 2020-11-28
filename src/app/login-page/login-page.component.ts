import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSettingService } from '../services/app-setting.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm =
    new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  userNameVal: string = ""
  passwordVal: string = ""
  constructor(private router: Router, private _appSetting: AppSettingService) { }

  ngOnInit(): void {
  }
  validateUser() {
    if (this.userNameVal == "") {

    }
    else if (this.passwordVal == "") {

    }
    else {
      localStorage.setItem("Username", this.userNameVal);
      localStorage.setItem("isLogin", "1");
      this.router.navigate(['/quiz'], { skipLocationChange: true });
      this._appSetting.setUserName(this.userNameVal);
    }
  }
}
