import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-geofenceedit',
  templateUrl: './geofenceedit.component.html',
  styleUrls: ['./geofenceedit.component.css']
})
export class GeofenceeditComponent implements OnInit {
  @ViewChild('map2', { static: true }) map1;
 

  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  

  address: string;
  driverName: any;
  selectedZoom: number;
  latitude: number;
  longitude: number;
  zoom: number = 11;
  searchString: any;
  polyarray: any = [];
  geoId: any
  driverId: any
  drawingManager: any;
  addgeofence: boolean = true;
  fencingList: any = [];
  constructTriangle: any;
  @ViewChild("AgmMap", { static: true }) Map: any;
  adminId: any;
  vacantDriversList: any = [];
  selected: any[];
  otherDriversList: any = [];
  vacantDriverView: boolean = false;
  fancingDriverName: any;
  vacantDrivers: any = [];
  fencingDrivers: any;
  geoFenceId: any;
  fencingDriversList: any;
  geoFenceList: any;
  formGroup: any;
  list: any;
  multiple: any;
  usersession: any;
  permissions: any;
  locationPoints: any;
  progress: any;
  sub: any;
  
  //zoom: number;
  geoCoder: google.maps.Geocoder;
  geofenceForm: FormGroup

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
  id: any;
  UserList: any;
  submitted: any;
  constructor(private act:ActivatedRoute,private toaster:ToastrService,public service:CommonService,private mapsAPILoader: MapsAPILoader, private router: Router, private fb: FormBuilder) { 
    this.act.params.subscribe((res:any)=>{
      this.id = res.id
    })
  }
  ngOnInit(): void {
    // this.getCustomer()
    this.geofenceForm = this.fb.group({
      geofenceName: ['', [Validators.required,Validators.maxLength(30)]],
      deliverycharges:['',Validators.required]
    })
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
    });
  }
  getCustomer(){
    let url= `/getGeofencebyid/${this.id}`
    this.service.get(url).subscribe((res:any)=>{
     if (res.message=='SUCCESS') {
      //  this.UserList = res.data.find(ele=>ele._id=this.id)
      console.log(res);
       this.geofenceForm.patchValue({
        geofenceName: res.data[0].name,
        deliverycharges:res.data[0].deliveryPrice
       })
       console.log("this is geo obj",res.data[0].geoPoints.coordinates)
       this.geoFenceId = res.data[0]._id;
       this.locationPoints = res.data[0].geoPoints.coordinates[0];
       console.log("hoi there",this.locationPoints);
       this.onEdit(this.locationPoints, this.geoFenceId);
     } else {
      //  this.toaster.error(res.message);
     }
    }, error => {
    //  this.toaster.error('Something went wrong');
    })
  }

  back() {
    history.back()
  }

  onEdit(locationPoints, geoId) {

    this.geoFenceId = '';
    // console.log('geoId', geoId);

    this.geoFenceId = geoId;
    var drawPolygonArr = [];
    locationPoints.forEach(element => {
      drawPolygonArr.push({
        lat: element[1],
        lng: element[0]
      })
      this.latitude = element[1];
      this.longitude = element[0];
    });
    console.log(drawPolygonArr);
    if (this.constructTriangle) {
      this.constructTriangle.setMap(null)
    }
    // Construct the polygon.
    this.constructTriangle = new google.maps.Polygon({
      paths: drawPolygonArr,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      editable: true,
      draggable: true
    })
    this.constructTriangle.setMap(null);

    this.constructTriangle.setMap(this.Map);



    console.log("this.polyarray ", this.polyarray)
   
  }

  save() {
    this.getPolygonCoordinates(this.constructTriangle);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {

    });
  }

  onMapReady(map) {
    this.Map = map;
    // this.initDrawingManager(this.Map);
  }
  onMapReady1(map) {
    this.Map = map;
    this.initDrawingManager(this.Map);

  }


  initDrawingManager(map: any) {
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingControl: true,
      drawingControlOptions: {

        drawingModes: [google.maps.drawing.OverlayType.POLYGON]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    });

    this.drawingManager.setMap(map);


    google.maps.event.addListener(this.drawingManager, 'overlaycomplete',
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) { //this is the coordinate, you can assign it to a variable or pass into another function. 

          this.polyarray = event.overlay.getPath().getArray();
        }
      });

  }

  submitData()
  {
    this.submitted=true
    this.getPolygonCoordinates(this.constructTriangle);
  }


  getPolygonCoordinates(draggablePolygon) {

    const len = draggablePolygon.getPath().getLength();
    const polyArrayLatLng = [];

    for (let i = 0; i < len; i++) {
      const vertex = draggablePolygon.getPath().getAt(i);
      const vertexLatLng = { lat: vertex.lat(), lng: vertex.lng() };
      polyArrayLatLng.push(vertexLatLng);
    }

    if (this.geofenceForm.valid && polyArrayLatLng.length) {
      this.addgeofence = false;
      var geofenceData = {
        "name": this.geofenceForm.get('geofenceName').value,
        "deliveryPrice": this.geofenceForm.get('deliverycharges').value,

        "points": polyArrayLatLng
      }
      // this.service.UpdateGeo(this.geoFenceId,geofenceData).subscribe((res:any) => {  change this by required api
       this.service.put(this.geoFenceId,geofenceData).subscribe((res:any) => {

        if (res['success'] == true) {
          this.addgeofence = false;
          this.toaster.success(res.message);

          this.router.navigate(['/pages/geofencelist'])
        } else {
          this.toaster.error(res.message);
        }

      });
    } else {
      // this.commonService.errorToast('Please Select a region')
    }

    
  }


}
