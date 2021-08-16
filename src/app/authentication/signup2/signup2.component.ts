import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.scss']
})
export class Signup2Component {
  constructor() {}

  signupform = true;
  signupnumber = false;
  numberform= true;
  otpform= false;
  signupdtl= false;
  signupdtl2= false;

  // showRecoverForm() {
  //   this.loginform = !this.loginform;
  //   this.recoverform = !this.recoverform;
  // }
  signupnumberform() {
    this.signupform = !this.signupform;
    this.signupnumber = !this.signupnumber;
  }
  signdtlform() {
    this.signupnumber = !this.signupnumber;
    this.signupdtl = !this.signupdtl;
  }
  signdtl2form() {
    this.signupform = !this.signupform;
    this.signupdtl2 = !this.signupdtl2;
  }
  signotpform() {
    this.numberform = !this.numberform;
    this.otpform = !this.otpform;
  }
  onOtpChange(e) {
    console.log(e);
  }
}
