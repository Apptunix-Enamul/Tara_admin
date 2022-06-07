import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(private spinner:NgxSpinnerService){}
  changeOfRoutes(){
     setTimeout(() => {
      this.spinner.hide()
     },130); 
  }

  ngOnInit(): void {
  }

}
