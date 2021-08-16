import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeofenceComponent } from './geofence.component';
import { GeofenceaddComponent } from './geofenceadd/geofenceadd.component';
import { GeofenceeditComponent } from './geofenceedit/geofenceedit.component';
import { GeofencelistComponent } from './geofencelist/geofencelist.component';

const routes: Routes = [
  {
    path: "",
    component: GeofenceComponent,
    children: [
      {
        path: "",
        component: GeofencelistComponent,
        data: {
          title: 'Geofence List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Geofence' }
          ]
        }
      },
      {
        path: "add",
        component: GeofenceaddComponent,
        data: {
          title: 'Add Geofence',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Geofence' }
          ]
        }
      },
      {
        path: "edit",
        component: GeofenceeditComponent,
        data: {
          title: 'Edit Geofence',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Geofence' }
          ]
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeofenceRoutingModule { }
