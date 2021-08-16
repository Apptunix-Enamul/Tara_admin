import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component {
  constructor() { }

  loginform = true;
  recoverform = false;
  loginnumber= false;
  numberform= true;
  otpform= false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  shownumbrForm() {
    this.loginform = !this.loginform;
    this.loginnumber = !this.loginnumber;
  }
  signotpform() {
    this.numberform = !this.numberform;
    this.otpform = !this.otpform;
  }
  onOtpChange(e) {
    console.log(e);
  }
}
