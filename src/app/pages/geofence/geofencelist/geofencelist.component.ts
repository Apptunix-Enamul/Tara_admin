import { Component, OnInit, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-geofencelist',
  templateUrl: './geofencelist.component.html',
  styleUrls: ['./geofencelist.component.css']
})
export class GeofencelistComponent implements OnInit {
  @ViewChild('map2', { static: true }) map1;
 

  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;

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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  addspeech(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editspeech(content4) {
    this.modalService.open(content4, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
