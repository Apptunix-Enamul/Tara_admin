import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import { environment } from 'src/environments/environment';
declare var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component implements OnInit ,AfterViewInit{
  LoginByEmailform:FormGroup
  ForgotPasswordForm:FormGroup
  optValue: any;
  constructor(private fb:FormBuilder,private router:Router,private service:CommonService,private toaster:ToastrService) {
    this.LoginByEmailform = this.fb.group({
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
      rememberMe:[false]
    })
   }
   @ViewChild('ngOtpInput') ngOtpInputRef:any;
   ResetOtp(){
    this.ngOtpInputRef.setValue('');
  }
  loginform = true;
  recoverform = false;
  loginnumber= false;
  numberform= true;
  otpform= false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  Openotp(){
    this.recoverform = !this.recoverform;
    this.otpform = true;
    this.numberform = !this.numberform
    this.loginnumber = !this.loginnumber
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
    this.optValue = e
  }
  ngAfterViewInit(){
    this.RememberMe()
  }
  ngOnInit(){
    this.ForgotPasswordForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    })
  }
  CancelledForgot(){
   this.showRecoverForm()
  }
  CallLoginFunction(){
   if(this.LoginByEmailform.valid){  
       let rememberMe=this.LoginByEmailform.controls['rememberMe'].value;
        let obj = {
         "email":this.LoginByEmailform.value.email,
         "password":this.LoginByEmailform.value.password,
       }
        this.onLogin(obj)
        if (rememberMe) {
          let userData = this.LoginByEmailform.value;
          localStorage.setItem('TaraRememberMe', JSON.stringify(userData))
        } else {
          localStorage.removeItem('TaraRememberMe')
        }
     }else{
      this.LoginByEmailform.markAllAsTouched()
    }  
    }
    onLogin(obj)
    {
  this.service.postApi(`auth/admin/login/`,obj).subscribe((res:any)=>{
    if([200,201].includes(res.code)){
   this.router.navigate(['dashboard']);
   sessionStorage.setItem(environment.storageKey,JSON.stringify(res?.data));
     this.toaster.success('You logged in successfully','',{
    timeOut: 2000,
  })
    }
    });
   }
  RememberMe(){
    if(localStorage.getItem('TaraRememberMe')){
      let userDetails = JSON.parse(localStorage.getItem('TaraRememberMe')); 
      this.LoginByEmailform.controls['email'].setValue(userDetails.email);
      this.LoginByEmailform.controls['password'].setValue(userDetails.password);
      this.LoginByEmailform.controls['rememberMe'].setValue(userDetails.rememberMe);
    }
  }
  ResetFor(){
  if(this.ForgotPasswordForm.valid){
        let obj = {"email":this.ForgotPasswordForm.value.email}
        this.Forgot(obj)
      }else {
        this.ForgotPasswordForm.markAllAsTouched()
      }
  }
  Forgot(obj){
    this.toaster.clear()
    this.service.put(`user/forgot-password/`,obj).subscribe((res:any)=>{
      if([200,201].includes(res.code)){
      this.toaster.success(res.message,'Success',{timeOut:1000})
     //   $('#exampleModalCenter').modal({backdrop: 'static', keyboard: false}) 
     this.Openotp()

      }
    })
  }
  ForgotOtp(obj){
    this.service.put(`user/forgot-verify-otp/`,obj).subscribe((res:any)=>{
      if([200,201].includes(res.code)){
      this.service.SaveObj = obj
       this.toaster.success('Otp verified successfully','',{timeOut:1000})
   //    $('#exampleModalCenter').modal('hide')
       this.router.navigate(['/changepassword'])
      }
    })
  }
  SendOtp(obj){
    this.service.post(`user/verify-otp/`,obj).subscribe((res:any)=>{
      if([200,201].includes(res.code)){
     sessionStorage.setItem("OtpDetails",JSON.stringify(obj));
     this.toaster.success('Otp verified successfully','',{timeOut:1000})
   //    $('#exampleModalCenter').modal('hide')
       this.router.navigate(['/changepassword'])
      }
    })
  }
  VerifyOtp(){
    this.toaster.clear()
    if(this.optValue && this.optValue.length===4){
      let obj = {
        "email":this.ForgotPasswordForm.value.email,
        "otp":this.optValue
         }
         // this.SendOtp(obj)
         this.ForgotOtp(obj)
    }else{
      this.toaster.error('Please enter 4-digit OTP','Error')
    }
     
    }
  
  ResendOtp(obj,msg){
  this.service.post(`user/send-otp-to-old-user/`,obj).subscribe((res:any)=>{
     if([200,201].includes(res.code)){
    //  $('#exampleModalCenter').modal({backdrop: 'static', keyboard: false}) 
       this.toaster.success(` Otp sent ${msg}`,'Resend OTP',{timeOut:1000})
     }
   })
  }
  CallResendOTP(){
    this.ResetOtp()
  let obj = {
    "email":this.ForgotPasswordForm.value.email,
     }
     this.ResendOtp(obj,'to email id')
   }
  }
