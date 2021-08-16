import {  AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';

export interface UserData {
  // hotelName: string,    
  // productname:string,
  // id: string,    
  // orderdate:string,
  // deliverydate:string,
  // delivery_man:string,
  // price:string,    
  // status:string,
  contact: string,
  audio: string,
  name: string,
  address:string,
  ordered_item:string,
  price:string,
}
@Component({
  selector: 'app-vendordetail',
  templateUrl: './vendordetail.component.html',
  styleUrls: ['./vendordetail.component.css']
})
export class VendordetailComponent implements OnInit {
  closeResult: string;
  //table: any
  displayedColumns: string[] = ['serial_no', 'audio', 'name', 'ordered_item', 'address', 'price'];
  displayedColumns2: string[] = ['serial_no', 'audio', 'name', 'ordered_item', 'address', 'price'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(){
    
  }
  constructor(private modalService: NgbModal) {
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.table);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  table = [
    {   
      serial_no:"1",
      audio:"assets/media/example.mp3",
      ordered_item:"Banana : 10",
      name: 'Sandy roy',
      // id:'Merchant1@gmail.com',
      contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 200",
      // action:"0",
      // status:"Completed",
    },
    {    
      serial_no:"2",
      audio:"assets/media/example.mp3",
      ordered_item:"Apple : 10",
      name: 'Rohan Smith',
      // id:'Merchant1@gmail.com',
      contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 250",
      // action:"1",      
      // status:"Rejected",
    },
    {    
      serial_no:"3",
      audio:"assets/media/example.mp3",
      ordered_item:"Apple : 3",
      name: 'john Doe',
      // id:'Merchant1@gmail.com',
      contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 150",
      // action:"1",
      // status:"Completed",
    },
   
  ]
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
