import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetail } from './userDetail.Model';

@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  userName: BehaviorSubject<string> = new BehaviorSubject(localStorage.getItem("Username"));
  loginPage: BehaviorSubject<boolean> = new BehaviorSubject(false);
  registeredUserList: UserDetail[] = []
  constructor() { }

  setUserName(changeValue: string) {
    this.userName.next(changeValue);
  }

  addNewUser(newUser: UserDetail) {
    this.registeredUserList.push(newUser);
    this.saveUserList();
  }

  saveUserList() {
    localStorage.setItem("UserList", JSON.stringify(this.registeredUserList));
  }

  getUserList() {
    let strUserList: string = localStorage.getItem("UserList");
    if (strUserList != null && strUserList != "")
      this.registeredUserList = JSON.parse(strUserList);
  }

  setAppSettings() {
    if (localStorage.getItem("Username") == null) {
      localStorage.setItem("Username", "");
      localStorage.setItem("isLogin", "0")
    }
  }
  
  validateUser(enteredValue: string, password: string) {
    let userIndex = this.registeredUserList.findIndex(el => (el.UserName.toLowerCase() == enteredValue.toLowerCase()
      || el.EmailId.toLowerCase() == enteredValue.toLowerCase()) && el.Password == password)
    return (userIndex != -1)
  }

}
