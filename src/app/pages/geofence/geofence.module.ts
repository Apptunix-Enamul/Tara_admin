import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeofenceComponent } from './geofence.component';

import { GeofenceRoutingModule } from './geofence-routing.module';
import { GeofencelistComponent } from './geofencelist/geofencelist.component';
import { GeofenceeditComponent } from './geofenceedit/geofenceedit.component';
import { GeofenceaddComponent } from './geofenceadd/geofenceadd.component';


@NgModule({
  declarations: [GeofencelistComponent, GeofenceeditComponent, GeofenceaddComponent, GeofenceComponent],
  imports: [
    CommonModule,
    GeofenceRoutingModule,
  ]
})
export class GeofenceModule { }
