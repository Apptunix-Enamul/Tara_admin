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
  constructor(private fb:FormBuilder,private router:Router,private service:CommonService,private toaster:ToastrService) {
    this.PhoneSignupForm=this.fb.group({
      // "oldPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "password":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "cnfPassword":["",[Validators.required]]
    },{ validators: MustMatch('password', 'cnfPassword') })
  }
ngOnInit(){}
changepass()
  {
  if(this.PhoneSignupForm.valid){
  let obj = {
    "email":JSON.parse(sessionStorage.getItem(environment.storageKey)).email,
    "password":this.PhoneSignupForm.value.password
   }
   this.service.putApi(`user/change-password/`,obj).subscribe((res:any)=>{
     console.log(res);
     if([200,201].includes(res.code))
     {
      this.toaster.success("Password has been changed",'Success');
      window.history.back();
     }
   })
}else{
  this.PhoneSignupForm.markAllAsTouched()
}
}
  BackToDashboard()
  {
    window.history.back();
  }
}
