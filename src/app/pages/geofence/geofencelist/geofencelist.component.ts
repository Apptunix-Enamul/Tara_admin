import { Component, OnInit, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

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
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;

  constructor(private modalService: NgbModal) {
    this.permissions = JSON.parse(
      sessionStorage.getItem(environment.storageKey)
    ).permissions;
    if (this.permissions.length==0 || this.permissions == null ||this.permissions == undefined) {
      this.editPermission = true;
      this.viewPermission = true;
    } else {
      this.editPermission = this.permissions[12].is_add_edit;
      this.viewPermission = this.permissions[12].is_view;
    }
   }

  ngOnInit(): void {
  }
  addspeech(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editspeech(content4) {
    this.modalService.open(content4, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
