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
    if (localStorage.getItem("isLogin") == "1") {
      this.router.navigate(['/quiz'], { skipLocationChange: true });
    }
    this._appSetting.getUserList();
    this._appSetting.loginPage.next(true);
  }
  validateUser() {
    if (this.userNameVal.trim() == "") {
      alert("Please Enter Username");
    }
    else if (this.passwordVal == "") {
      alert("Please Enter Password");
    }
    else {
      if (this._appSetting.validateUser(this.userNameVal, this.passwordVal)) {
        this._appSetting.setUserName(this.userNameVal);
        localStorage.setItem("Username", this.userNameVal);
        localStorage.setItem("isLogin", "1");
        this.router.navigate(['/quiz'], { skipLocationChange: true });
        this._appSetting.loginPage.next(false);
      }
      else {
        alert("Provided UserName & Password Invalid.")
        this.passwordVal = "";
        this.userNameVal = "";
      }
    }
  }
}
