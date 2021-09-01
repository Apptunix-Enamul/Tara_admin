import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements  OnInit {
TermConditionForm:FormGroup
  TermsData: any;
  constructor(private service:CommonService,private fb:FormBuilder,private toast:ToastrService) {
    this.TermConditionForm = this.fb.group({
      terms_and_conditions:['',Validators.required]
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
          this.toast.success('Terms and condition updated','Success')
        }
      })
    }else{
      this.TermConditionForm.markAllAsTouched()
    }
  }
  GetTerms(){
this.service.get(`cms/get-cms/`).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get Terms',res);
    this.TermsData = res.data
    this.TermConditionForm.controls['terms_and_conditions'].setValue(res.data.terms_and_conditions)
  }
})
  }
}
