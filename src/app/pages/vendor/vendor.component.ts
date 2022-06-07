import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  constructor(private spinner:NgxSpinnerService){}
  changeOfRoutes(){
  this.spinner.hide()
  }

  ngOnInit(): void {
  }

}
