import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeofenceComponent } from './geofence.component';

import { GeofenceRoutingModule } from './geofence-routing.module';
import { GeofencelistComponent } from './geofencelist/geofencelist.component';
import { GeofenceeditComponent } from './geofenceedit/geofenceedit.component';
// import { GeofenceaddComponent } from './geofenceadd/geofenceadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { GeofenceaddComponent } from './geofenceadd/geofenceadd.component';


@NgModule({
  declarations: [GeofencelistComponent, GeofenceeditComponent, GeofenceComponent,GeofenceaddComponent],
  imports: [
    CommonModule,
    GeofenceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,

  ]
})
export class GeofenceModule { }
