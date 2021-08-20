import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';

export interface UserData {
  // hotelName: string,
  // productname:string,
  id: string,
  // orderdate:string,
  // deliverydate:string,
  // delivery_man:string,
  // coupon:string;
  // audio: string,
  name: string,
  // contact:string,
  address:string,
  ordered_item:string,
  price:string,
  // action:string,
  // status:string,
}
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements AfterViewInit    {

  closeResult: string;
  //table: any
  // displayedColumns: string[] = [ 'hotelName' ,'id', 'orderdate','deliverydate','delivery_man','price','coupon','status'];
  displayedColumns: string[] = ['serial_no', 'name', 'ordered_item', 'address', 'price'];
  displayedColumns2: string[] = ['serial_no', 'name', 'ordered_item', 'address', 'price'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private modalService: NgbModal) {
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
      // audio:"assets/media/example.mp3",
      ordered_item:"Banana : 10",
      name: 'Big Bazar',
      id:'Merchant1@gmail.com',
      // contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 200",
      // action:"0",
      // status:"Completed",
    },
    {    
      serial_no:"2",
      // audio:"assets/media/example.mp3",
      ordered_item:"Apple : 10",
      name: 'Big Bazar',
      id:'Merchant1@gmail.com',
      // contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 250",
      // action:"1",      
      // status:"Rejected",
    },
    {    
      serial_no:"3",
      // audio:"assets/media/example.mp3",
      ordered_item:"Apple : 3",
      name: 'Big Bazar',
      id:'Merchant1@gmail.com',
      // contact: '+91 9874563210',
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

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }


