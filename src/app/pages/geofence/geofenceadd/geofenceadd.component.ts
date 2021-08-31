 import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import {Loader, LoaderOptions} from 'google-maps';
@Component({
  selector: 'app-geofenceadd',
  templateUrl: './geofenceadd.component.html',
  styleUrls: ['./geofenceadd.component.css']
})
export class GeofenceaddComponent implements OnInit {
  @ViewChild("AgmMap", { static: true }) Map: any;
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  longitude: number;
  //zoom: number;
  geoCoder: google.maps.Geocoder;
  drawingManager: google.maps.drawing.DrawingManager;
  polyarray: any = [];
  geofenceForm: FormGroup
  submitted:boolean = false
  progress: boolean;
  sub: any;
  styles: any = [
    {
      featureType: 'all',
      stylers: [
        {
          saturation: -80
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#00ffee'
        },
        {
          saturation: 50
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];
  constructor(private toaster: ToastrService, private mapsAPILoader: MapsAPILoader, private router: Router, private fb: FormBuilder, private apiService: CommonService) { 
    this.setCurrentLocation()
  }

  AlphabetOnly(event){
    let pattAlpha = /^([a-zA-Z ])*$/;
    let resultAlpha = pattAlpha.test(event.key);
    return resultAlpha;
     }
  
     NumberOnly(event){
      let pattAlpha = /^([0-9])*$/;
      let resultAlpha = pattAlpha.test(event.key);
      return resultAlpha;
       }

  ngOnInit(): void {
    this.geofenceForm = this.fb.group({
      geofenceName: ['', [Validators.required,Validators.maxLength(30)]],
      deliverycharges:['',Validators.required]
    })
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
    });
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
 });
  }
  setCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 11;
        this.getAddress(this.lat, this.lng);
      });
    }
  }
  initDrawingManager(map: any) { // method is used to create POLYGON

    const options = {
      drawingControl: true,
      drawingControlOptions: {

        drawingModes: [google.maps.drawing.OverlayType.POLYGON]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };


    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(map);


    google.maps.event.addListener(this.drawingManager, 'overlaycomplete',
      (event) => {

        if (event.type === google.maps.drawing.OverlayType.POLYGON) { //this is the coordinate, you can assign it to a variable or pass into another function. 
          this.polyarray = event.overlay.getPath().getArray();
        }
      });

  }
  onMapReady(map) {
    this.Map = map;
    this.initDrawingManager(this.Map);
  }
  save() {
    this.submitted = true
let url = `/addGeofence`
    if (this.geofenceForm.valid && this.polyarray.length > 0) {
   this.progress = true
      var geofenceData = {
        "name": this.geofenceForm.get('geofenceName').value,
        "deliveryPrice":this.geofenceForm.get('deliverycharges').value,
        "points": this.polyarray
      }
if(this.geofenceForm.valid){
  this.apiService.postApi(url,geofenceData).subscribe((res:any) => {
    console.log('This is ')
    if (res.success) {
      this.progress = false
      this.toaster.success(res.message)
      this.router.navigate(['pages/geofencelist'])
      this.geofenceForm.reset()
      this.submitted = false
    } else {
      this.progress = false
      this.toaster.error(res.message)
    }
  },
  error => {
    this.toaster.error('Something went wrong');
   });
  
} else {
  this.toaster.error('Make Sure you have typed in the name and selected the area for geofence')

}
}else if(this.geofenceForm.invalid){
  this.toaster.error('Please fill all field')
}}

}     

  

