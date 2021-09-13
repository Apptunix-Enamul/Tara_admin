import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import Quill from 'quill';
import QuillResize from 'quill-resize-module';
Quill.register('modules/resize', QuillResize);
var quill = new Quill("editor", {
  // ...
  modules: {
      // ...
      resize: {
          // ...
          // set parchment key to enable resize module
          parchment: {
              image: {
                  attribute: ['width'],  // ['width', 'height']
                  limit: {
                      minWidth: 200,
                      maxWidth: 600,
                      minHeight: 200,
                      maxHeight: 450,
                      ratio: .5625  // keep width/height ratio. (ratio=height/width)
                  }
              }
          },
          styles: {
              handle: {
                  backgroundColor: 'black',
                  border: 'none',
                  color: "white"
                  // other camelCase styles for size display
              }
          }
      }
  }
});
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
