import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  userName: BehaviorSubject<string> = new BehaviorSubject(localStorage.getItem("Username"));
  constructor() { }
  
  setUserName(changeValue:string){
    this.userName.next(changeValue);
  }
}
