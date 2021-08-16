import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';

export interface UserData {
  hotelName: string,    
  productname:string,
  id: string,    
  orderdate:string,
  deliverydate:string,
  delivery_man:string,
  price:string,    
  status:string,
}
@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.css']
})
export class ShopdetailComponent {
 
}

