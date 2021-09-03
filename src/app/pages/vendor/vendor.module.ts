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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { MatTooltipModule } from '@angular/material/tooltip';


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
    FormsModule,
    VendorRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatExpansionModule,
    NgxIntlTelInputModule,
    GooglePlaceModule,
    AgmCoreModule,
    MatTooltipModule,
  ]
})
export class VendorModule { }
