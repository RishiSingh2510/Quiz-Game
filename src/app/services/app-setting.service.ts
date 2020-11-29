import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetail } from './userDetail.Model';

@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  userName: BehaviorSubject<string> = new BehaviorSubject(localStorage.getItem("Username"));
  registeredUserList: UserDetail[] = []
  constructor() { }

  setUserName(changeValue: string) {
    this.userName.next(changeValue);
  }

  addNewUser(newUser: UserDetail) {
    this.registeredUserList.push(newUser)
  }

  getUserList() {

  }
  
  validateUser(enteredValue: string, password: string) {
    let userIndex = this.registeredUserList.findIndex(el => (el.UserName.toLowerCase() == enteredValue.toLowerCase()
      || el.EmailId.toLowerCase() == enteredValue.toLowerCase()) && el.Password == password)
    return (userIndex != -1)
  }
}
