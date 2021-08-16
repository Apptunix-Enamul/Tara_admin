import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
export interface UserData {
  serial_no:string,
  name: string,
  lastname: string,
  gender: string,
  age: string,
 // completedOrders:string,
  // id: string,
  //cancelledOrders:string,
  //totalOrders:string,
  contact:string,
  email:string;
 status:string,
  action:string,
  address:string,
 // pendingOrders:string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  closeResult: string;

  //table: any
  displayedColumns: string[] = [ 'serial_no','name','lastname', 'gender', 'age', 'email','contact','address','status','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private modalService: NgbModal) {
    this.dataSource = new MatTableDataSource(this.table);
  }
  ngOnInit(): void {
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
      serial_no:'1',
      name: 'Sandy',
      lastname: 'Doe',
      // id: "#sand334553",
      gender: "Male",
      age:"20",
      contact:"+91-33434343",
      email:"sand@example.com",
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      status:"",
      action:"1",
    },
    {
      serial_no:'2',
      name: 'Rohan',
      lastname: 'Arya',
      // id: "#rohan334553",
      gender: "Female",
      age:"20",
      contact:"+91-33434343",
      email:"sand@example.com",
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      status:"",
      action:"1",
    },
    {
      serial_no:'3',
      name: 'john',
      lastname: 'Root',
      // id: "#rohan334553",
      gender: "Male",
      age:"20",
      contact:"+91-33434343",
      email:"sand@example.com",
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      status:"",
      action:"1",
    },

  ]
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
// This is for the first modal
open1(content1) {
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}
