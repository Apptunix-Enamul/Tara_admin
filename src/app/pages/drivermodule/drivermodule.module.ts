import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivermoduleRoutingModule } from './drivermodule-routing.module';
import { DrivermoduleComponent } from './drivermodule.component';
import { DriverRequestComponent } from './driver-request/driver-request.component';
import { DriverdetailComponent } from './driverdetail/driverdetail.component';
import { DriverComponent } from './driver/driver.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { EditdriverComponent } from './editdriver/editdriver.component';

@NgModule({
  declarations: [
    DrivermoduleComponent,
    DriverRequestComponent,
    DriverdetailComponent,
    DriverComponent,
    AdddriverComponent,
    EditdriverComponent,
  ],
  imports: [
    CommonModule,
    DrivermoduleRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    FormsModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatExpansionModule,
  ]
})
export class DrivermoduleModule { }
