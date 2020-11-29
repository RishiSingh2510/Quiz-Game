import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSettingService } from '../services/app-setting.service';
import { UserDetail } from '../services/userDetail.Model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  registerForm: FormGroup

  constructor(private _appSetting: AppSettingService) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'fullName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'userName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(8)]),
      'emailId': new FormControl('', [Validators.required, Validators.email]),
      'city': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
      'zip': new FormControl('', Validators.required),
      'invalidCheck': new FormControl('', Validators.required),
    })
  }
  onSubmit() {
    if (this.registerForm.valid) {
      let newUserDetail: UserDetail = new UserDetail();
      newUserDetail.UserId = this._appSetting.registeredUserList.length + 1
      newUserDetail.FullName = this.registerForm.get('fullName').value;
      newUserDetail.UserName = this.registerForm.get('userName').value;
      newUserDetail.Password = this.registerForm.get('password').value;
      newUserDetail.EmailId = this.registerForm.get('emailId').value;
      newUserDetail.City = this.registerForm.get('city').value;
      newUserDetail.State = this.registerForm.get('state').value;
      newUserDetail.ZipCode = this.registerForm.get('zip').value;
      this._appSetting.addNewUser(newUserDetail);
    }
  }

}
