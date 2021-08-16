import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
