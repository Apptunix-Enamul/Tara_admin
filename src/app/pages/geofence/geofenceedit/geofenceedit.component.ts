import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
declare const google: any;
@Component({
  selector: 'app-geofenceedit',
  templateUrl: './geofenceedit.component.html',
  styleUrls: ['./geofenceedit.component.css']
})
export class GeofenceeditComponent implements OnInit {

  lat = 20.5937;
  lng = 78.9629;
  pointList: { lng: number; lat: number }[] = [];
  drawingManager: any;
  selectedShape: any;
  selectedArea = 0;
  locationPoints: any;
  constructTriangle:any;
  @ViewChild("AgmMap", { static: true }) Map: any;

  test=null;
  getZoom;
  constructor(private service:CommonService,private toastr:ToastrService,private fb:FormBuilder,private router:Router) {

    var drawPolygonArr = [];

    this.service.get(``).subscribe((data:any)=>{
      if(data.statusCode == 200){
        this.getZoom=data.data.zoom;
        this.lng=data.data.geoPoints.coordinates[0][data.data.geoPoints.coordinates[0].length-1][0];
        this.lat=data.data.geoPoints.coordinates[0][data.data.geoPoints.coordinates[0].length-1][1];

        //console.log(this.lat);
        this.editForm.controls['name'].setValue(data.data.name);
        for(let i=0;i<data.data.geoPoints.coordinates[0].length;i++){
          // drawPolygonArr.push(data.data.geoFence.coordinates[0][i]);
        drawPolygonArr.push({
          lat: data.data.geoPoints.coordinates[0][i][1],
          lng: data.data.geoPoints.coordinates[0][i][0]
        })

        }
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
        //this.pointList=drawPolygonArr;
    this.constructTriangle.setMap(this.Map);
       // console.log(data.data.geoFence.coordinates[0]);
      }
      else{
        this.router.navigate(['/pages/geofencelist']);
      }
    })
    this.test=drawPolygonArr;
  }


  editForm=this.fb.group({
    name:['',Validators.required]
  });
  ngOnInit() {

   // console.log(this.pointList);

  }

  onMapReady(map) {

    this.Map=map;
    // console.log("ooooooooooooooo",this.test);
    if(this.test == null){
    this.initDrawingManager(map);
    }
  }

  initDrawingManager = (map: any) => {
   // debugger
    const self = this;
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon'],
      },
      polygonOptions: {
        draggable: true,
        editable: true,
      },

      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(map);
    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          const paths = event.overlay.getPaths();
          for (let p = 0; p < paths.getLength(); p++) {
            google.maps.event.addListener(
              paths.getAt(p),
              'set_at',
              () => {
                if (!event.overlay.drag) {
                  self.updatePointList(event.overlay.getPath());
                }
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'insert_at',
              () => {
                self.updatePointList(event.overlay.getPath());
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'remove_at',
              () => {
                self.updatePointList(event.overlay.getPath());
              }
            );
          }
          self.updatePointList(event.overlay.getPath());
          this.selectedShape = event.overlay;
          this.selectedShape.type = event.type;
        }
        if (event.type !== google.maps.drawing.OverlayType.MARKER) {
          // Switch back to non-drawing mode after drawing a shape.
          self.drawingManager.setDrawingMode(null);
          // To hide:
          self.drawingManager.setOptions({
            drawingControl: false,
          });
        }
      }
    );
  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  deleteSelectedShape() {
    if (this.selectedShape) {
      // console.log("hi");
      this.selectedShape.setMap(null);
      this.selectedArea = 0;
      this.pointList = [];


      // To show:
      this.drawingManager.setOptions({
        drawingControl: true,
      });
      this.onMapReady(this.Map);
    }
    else{
      // console.log("bye");
    this.test=null;
    this.onMapReady(this.Map);
    //this.Map=null;
    this.constructTriangle.setMap(null);
    this.constructTriangle=null;}
  }

  updatePointList(path) {
    this.pointList = [];
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      this.pointList.push(
        path.getAt(i).toJSON()
      );
    }
    this.selectedArea = google.maps.geometry.spherical.computeArea(
      path
    );
  }

  getPolygonCoordinates(draggablePolygon) {

    const len = draggablePolygon.getPath().getLength();
    const polyArrayLatLng = [];

    for (let i = 0; i < len; i++) {
      const vertex = draggablePolygon.getPath().getAt(i);
      const vertexLatLng = { lat: vertex.lat(), lng: vertex.lng() };
      polyArrayLatLng.push(vertexLatLng);
    }
    this.pointList=null;
    this.pointList=polyArrayLatLng;
  }


  updateZoom(event){
    this.getZoom=event;
  }

  updateGeoFence(){
   // console.log("list",this.pointList);
   // console.log("test,",this.test);
    if(this.pointList.length !=0 || this.constructTriangle!=null ){
      if(this.test!=null){
      this.getPolygonCoordinates(this.constructTriangle);}
      let body;

      body={
       'name':this.editForm.controls['name'].value,
       'points':[],
       'zoom':this.getZoom
     }
    // console.log("data sending",this.pointList);
 body.points=this.pointList;




 this.service.put(body).subscribe((data:any)=>{
   if(data.statusCode == 200){
     this.toastr.success("Updated successfully");
     this.router.navigate(['/pages/geofencelist']);
   }
 })

    }

    else{
      this.toastr.error("Please Add Geofence");
    }

  }

}
