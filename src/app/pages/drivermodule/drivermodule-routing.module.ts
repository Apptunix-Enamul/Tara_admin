import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrivermoduleComponent } from './drivermodule.component';
import { DriverRequestComponent } from './driver-request/driver-request.component';
import { DriverdetailComponent } from './driverdetail/driverdetail.component';
import { DriverComponent } from './driver/driver.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { EditdriverComponent } from './editdriver/editdriver.component';

const routes: Routes = [
  {
    path:"",
    component: DrivermoduleComponent,
    children:[
      {
        path: '',
        component: DriverComponent,
        data: {
          title: 'Drivers',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Drivers' }
          ]
        }
      },
      {
        path: 'driveradd',
        component: AdddriverComponent,
        data: {
          title: 'Add Driver',
          urls: [
            { title: 'Dashboard', url: '/driveradd' },
            { title: 'Add Driver' }
          ]
        }
      },
  {
    path: 'driversrequest',
    component: DriverRequestComponent,
    data: {
      title: 'Driver Request',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Driver Request' }
      ]
    }
  },
  {
    path: 'driversdetail',
    component: DriverdetailComponent,
    data: {
      title: 'Drivers Detail',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Drivers Detail' }
      ]
    }
  },
  {
    path: 'driveredit',
    component: EditdriverComponent,
    data: {
      title: 'Edit Driver',
      urls: [
        { title: 'Dashboard', url: '/driveredit' },
        { title: 'Edit Driver' }
      ]
    }
  },
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivermoduleRoutingModule { }
