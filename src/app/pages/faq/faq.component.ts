import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  SubcategoryForm:FormGroup
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.buildForm();
    this.addUser();
  }
  buildForm() {
    this.SubcategoryForm = new FormGroup({
      productLabels: new FormArray([])
    })
  }
  createRow() {
    return this.fb.group({
      question: new FormControl('',[Validators.required]),
      answer:new FormControl('',[Validators.required]),
     
    })
  }
addUser() {
    const add = this.SubcategoryForm.get('productLabels') as FormArray;
    add.push(this.createRow());
  }
  removeUser(i) {
    const remove = this.SubcategoryForm.get('productLabels') as FormArray;
    remove.removeAt(i);
  }
  add(){ 
    let row = document.createElement('div');   
      row.className = 'bg-light p-3 mb-3'; 
      row.innerHTML = ` 
      <div class="form-group">        
      <input type="text" class="form-control" placeholder="Add Quetions">
      </div>
      <div class="">      
      <textarea class="form-control" rows="3" placeholder="Add Answer here"></textarea>
      </div>
      `; 
      document.querySelector('.showInputField').appendChild(row); 
  } 
}
