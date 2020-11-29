import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettingService } from './services/app-setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Quiz-Game';
  Username: string = ""
  constructor(private _appSetting: AppSettingService, private router: Router) { }
  ngOnInit() {
    this._appSetting.setAppSettings();
    this._appSetting.userName.subscribe(resp => {
      this.Username = resp.toUpperCase();
    })
  }
  LogOutUser() {
    this._appSetting.setUserName("");
    localStorage.setItem("Username", "");
    localStorage.setItem("isLogin", "0")
    this.router.navigate(['/'], { skipLocationChange: true });
  }
}
