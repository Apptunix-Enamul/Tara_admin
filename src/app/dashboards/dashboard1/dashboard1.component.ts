import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit {
  constructor(private spinner:NgxSpinnerService) {
    this.spinner.hide()
  }

  ngAfterViewInit() {}
}
