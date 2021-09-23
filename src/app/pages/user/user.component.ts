import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService){}
  changeOfRoutes(){
    console.log('User chngd');
     setTimeout(() => {
       this.spinner.hide()
     },130); 
  }
 ngOnInit(): void {
  }

}
