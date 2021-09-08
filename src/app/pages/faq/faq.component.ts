import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  Faqcheck:FormGroup;
  termscond: any;
  IdData: any;
  
  constructor(private Srvc:CommonService,private formBuilder:FormBuilder,private noti:ToastrService) 
  {

  this.Faqcheck = this.formBuilder.group({
    specification: this.formBuilder.array([], [Validators.required]),
  })

  }

  ngOnInit(): void {
    this.GetFaq()
  }
  GetFaq(){ 
      this.Srvc.get(`cms/get-faq/`).subscribe((res:any)=>
      {
        if([200,201].includes(res.code)){
          this.setSpecifications(res.data)
          this.IdData = res?.data
        }
      })
  } 

  addNewSpecification() {
   
    this.specification().push(this.newSpecifiaction())
  }
  removeSpecification(i: number) {
    this.specification().removeAt(i);
  }
newSpecifiaction(): FormGroup {
    return this.formBuilder.group({
      question: new FormControl('', [Validators.required]),
      answer: new FormControl('', [Validators.required]),
      id: new FormControl('')
    })
  }
 specification(): FormArray {
    return this.Faqcheck.get('specification') as FormArray;
  }
saveFaq()

  {
    this.noti.clear()
    this.Faqcheck.controls['specification'].value.forEach(v => (v.id=="")?delete v.id:'')
 
    if(this.Faqcheck.valid)
    {
      this.Srvc.post(`cms/get-create-update-delete-faq/`,this.Faqcheck.get('specification').value).subscribe((res:any)=>
      {
        if(res.code == 200)
        {
         this.noti.success("Faq's updated successfully",'Success')
         
        }
      })
    }else{
      this.Faqcheck.markAllAsTouched()
    }
 
  }

  setSpecifications(item) {
    const formArray = new FormArray([]);
    for (let x of item) {
      console.log(x)
      formArray.push(this.formBuilder.group({
        question: [x.question,[Validators.required]],
        answer: [x.answer,[Validators.required]],
        id:x.id
      }));
    }
    this.Faqcheck.setControl('specification',formArray)
  }










//   SubcategoryForm:FormGroup
//   constructor(private fb:FormBuilder) { }
//   ngOnInit() {
//     this.buildForm();
//     this.addUser();
//   }
//   buildForm() {
//     this.SubcategoryForm = new FormGroup({
//       productLabels: new FormArray([])
//     })
//   }
//   createRow() {
//     return this.fb.group({
//       question: new FormControl('',[Validators.required]),
//       answer:new FormControl('',[Validators.required]),
     
//     })
//   }
// addUser() {
//     const add = this.SubcategoryForm.get('productLabels') as FormArray;
//     add.push(this.createRow());
//   }
//   removeUser(i) {
//     const remove = this.SubcategoryForm.get('productLabels') as FormArray;
//     remove.removeAt(i);
//   }
//   add(){ 
//     let row = document.createElement('div');   
//       row.className = 'bg-light p-3 mb-3'; 
//       row.innerHTML = ` 
//       <div class="form-group">        
//       <input type="text" class="form-control" placeholder="Add Quetions">
//       </div>
//       <div class="">      
//       <textarea class="form-control" rows="3" placeholder="Add Answer here"></textarea>
//       </div>
//       `; 
//       document.querySelector('.showInputField').appendChild(row); 
//   } 
}
