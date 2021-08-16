import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { VendordetailComponent } from './vendordetail/vendordetail.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorhistoryComponent } from './vendorhistory/vendorhistory.component';
import { VendorComponent } from './vendor.component';
import { VendorRequestComponent } from './vendor-request/vendor-request.component';

const routes: Routes = [
  {
		path: "",
		component: VendorComponent,
		children: [
  {
    path: '',
    component: VendorsComponent,
    data: {
      title: 'Vendors',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Vendors' }
      ]
    }
  },
  {
    path: 'addvendor',
    component: AddvendorComponent,
    data: {
      title: 'Add Vendor',
      urls: [
        { title: 'Dashboard', url: '/addvendor' },
        { title: 'Add Vendor' }
      ]
    }
  },
  {
    path: 'editvendor',
    component: EditvendorComponent,
    data: {
      title: 'Edit Vendor',
      urls: [
        { title: 'Dashboard', url: '/editvendor' },
        { title: 'Edit Vendor' }
      ]
    }
  },
  {
    path: 'vendorsrequest',
    component: VendorRequestComponent,
    data: {
      title: 'Vendors Request',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Vendors Request' }
      ]
    }
  },
  {
    path: 'vendorsdetail',
    component: VendordetailComponent,
    data: {
      title: 'Vendors Detail',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Vendors Detail' }
      ]
    }
  },
  {
    path: 'vendorHistory',
    component: VendorhistoryComponent,
    data: {
      title: 'Vendors History',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Vendors History' }
      ]
    }
  },
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
