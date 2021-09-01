import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements  OnInit {
  TermConditionForm:FormGroup
  TermsData: any;
  constructor(private service:CommonService,private fb:FormBuilder,private toast:ToastrService) {
    this.TermConditionForm = this.fb.group({
      privacy:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.GetTerms()
  }
  SaveTerms(){
    if(this.TermConditionForm.valid){
      this.service.post(`cms/create-update-cms/`,this.TermConditionForm.value).subscribe((res:any)=>{
        if([200,201].includes(res.code)){
          this.GetTerms()
          this.toast.success('Privacy policy updated','Success')
        }
      })
    }else{
      this.TermConditionForm.markAllAsTouched()
    }
  }
  GetTerms(){
this.service.get(`cms/get-cms/`).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get privacy',res);
    this.TermsData = res.data
    this.TermConditionForm.controls['privacy'].setValue(res.data.privacy)
  }
})
  }
}
