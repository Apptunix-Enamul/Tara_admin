import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import { MustMatch } from 'src/app/_validators/must-match.validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changePass.scss']
})
export class changepasswordComponent implements OnInit{
  PhoneSignupForm:FormGroup
  obj:any
  Reference:any
  currentUser: any;
  ChangePasswordToute:any = `user/change-password/`
  IsToken :boolean = false
  constructor(private fb:FormBuilder,private router:Router,private service:CommonService,private toaster:ToastrService) {
   this.currentUser = JSON.parse(sessionStorage.getItem(environment.storageKey));
  }
ngOnInit(){
this.obj = this.service.SaveObj
if(this.currentUser && this.currentUser.token){
  this.IsToken = true
  this.PhoneSignupForm=this.fb.group({
    "oldPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    "password":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    "cnfPassword":["",[Validators.required]]
  },{ validators: MustMatch('password', 'cnfPassword') })
}else{
  this.PhoneSignupForm=this.fb.group({
    "password":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    "cnfPassword":["",[Validators.required]]
  },{ validators: MustMatch('password', 'cnfPassword') })
}
  
}
changepass()
  {
  if(this.PhoneSignupForm.valid){
    this.CallChangePassword()
}else{
  this.PhoneSignupForm.markAllAsTouched()
}
}
  BackToDashboard()
  {
    window.history.back();
  }
  CallChangePassword(){
    if(this.currentUser && this.currentUser.token){
      this.ChangePasswordToute = `user/update-password/`
       this.obj = {
        current_password:this.PhoneSignupForm.value.oldPassword,
        new_password:this.PhoneSignupForm.value.password
        }
      }else{
        this.obj = {
         "email":this.obj?.email,
         "password":this.PhoneSignupForm.value.password
       }
        }
      this.service.putApi(this.ChangePasswordToute,this.obj).subscribe((res:any)=>{
        if([200,201].includes(res.code))
        {
         this.toaster.success("Password has been changed",'Success');
         window.history.back();
        }
      })
  }
}
