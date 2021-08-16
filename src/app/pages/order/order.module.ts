import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { OrderComponent } from 'src/app/pages/order/order.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import {OrderdetailComponent} from './orderdetail/orderdetail.component';


@NgModule({
  declarations: [
    OrderlistComponent,
    OrderdetailComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    NgbModule,
    QuillModule.forRoot(),
    ChartsModule,
    ChartistModule,
    NgxChartsModule,
    NgxDatatableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatNativeDateModule,
    RouterModule
  ]
})
export class OrderModule { }
