import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.component.html',
  styleUrls: ['./geofence.component.css']
})
export class GeofenceComponent implements OnInit {
  constructor(private spinner:NgxSpinnerService){}
  changeOfRoutes(){
     setTimeout(() => {
      this.spinner.hide()
     },130); 
  }

  ngOnInit(): void {
  }

}
