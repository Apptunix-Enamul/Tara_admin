 import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import {Loader, LoaderOptions} from 'google-maps';
declare const google: any;
@Component({
  selector: 'app-geofenceadd',
  templateUrl: './geofenceadd.component.html',
  styleUrls: ['./geofenceadd.component.css']
})
export class GeofenceaddComponent implements OnInit {
  @ViewChild("map2", { static: true }) map1;

  // lat = -34.397;
  // lng = 150.644;
  // latA = -34.754764;
  // lngA = 149.736246;
  // zoom = 8;

  // styles: any = [
  //   {
  //     featureType: "all",
  //     stylers: [
  //       {
  //         saturation: -80,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "road.arterial",
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         hue: "#00ffee",
  //       },
  //       {
  //         saturation: 50,
  //       },
  //     ],
  //   },
  //   {
  //     featureType: "poi.business",
  //     elementType: "labels",
  //     stylers: [
  //       {
  //         visibility: "off",
  //       },
  //     ],
  //   },
  // ];

  lat = 40.7128;
  lng = -74.0060;
  pointList: { lat: number; lng: number }[] = [];
  drawingManager: any;
  selectedShape: any;
  selectedArea = 0;
  sendZoom = 14;

  constructor(
    
    private router: Router,
    private Srvc: CommonService,
    private toaster: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setCurrentPosition();
  }

  Map: any;
  onMapReady(map) {
    this.Map = map;
    this.initDrawingManager(map);
  }

  getZoom(event) {
    console.log(event);
    this.sendZoom = event;
  }
  initDrawingManager = (map: any) => {
    const self = this;
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"],
      },
      polygonOptions: {
        draggable: true,
        editable: true,
      },

      drawingMode: google.maps.drawing.OverlayType.POLYGON,
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(map);
    google.maps.event.addListener(
      this.drawingManager,
      "overlaycomplete",
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          const paths = event.overlay.getPaths();
          for (let p = 0; p < paths.getLength(); p++) {
            google.maps.event.addListener(paths.getAt(p), "set_at", () => {
              if (!event.overlay.drag) {
                self.updatePointList(event.overlay.getPath());
              }
            });
            google.maps.event.addListener(paths.getAt(p), "insert_at", () => {
              self.updatePointList(event.overlay.getPath());
            });
            google.maps.event.addListener(paths.getAt(p), "remove_at", () => {
              self.updatePointList(event.overlay.getPath());
            });
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
  };

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  deleteSelectedShape() {
    if (this.selectedShape) {
      this.selectedShape.setMap(null);
      this.selectedArea = 0;
      this.pointList = [];
      // To show:
      this.drawingManager.setOptions({
        drawingControl: true,
      });
      this.onMapReady(this.Map);
    }
  }

  updatePointList(path) {
    this.pointList = [];
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      this.pointList.push(path.getAt(i).toJSON());
    }
    this.selectedArea = google.maps.geometry.spherical.computeArea(path);
  }

  addGeofenceForm = this.fb.group({
    name: ["",
     [Validators.required,Validators.maxLength(45),Validators.minLength(2)]
    ],
  });

   // Avoid empty Blank Space
   avoidBlankSpace(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }


  addGeoFence() {
    if (this.pointList.length != 0) {
      let body = {
        name: this.addGeofenceForm.controls["name"].value,
        points: [],
        zoom: this.sendZoom,
      };
      body.points = this.pointList;
      this.Srvc.postApi(``,body).subscribe((data: any) => {
        if (data.statusCode == 200) {
          this.toaster.success("Geofence Added");
          this.router.navigate(["/pages/geofencelist"]);
        } else {
          this.toaster.error("Failed to add Geofence");
        }
      });
    } else {
      this.toaster.error("Please Add geofence");
    }
  }
}     

  

