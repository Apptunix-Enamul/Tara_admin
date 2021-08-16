import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import {VendorsComponent} from './vendors/vendors.component';
import {VendordetailComponent} from './vendordetail/vendordetail.component';
import {VendorhistoryComponent} from './vendorhistory/vendorhistory.component';
import {EditvendorComponent} from './editvendor/editvendor.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { VendorComponent } from './vendor.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    VendorsComponent,
    VendordetailComponent,
    VendorhistoryComponent,
    EditvendorComponent,
    AddvendorComponent,
    VendorComponent,
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatExpansionModule,
  ]
})
export class VendorModule { }
