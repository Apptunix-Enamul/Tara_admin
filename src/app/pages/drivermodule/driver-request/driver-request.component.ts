import { Component, OnInit,ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
export interface UserData {
  serial_no:string,
  name: string,
  lastName:string,
  // completedOrders:string,
  id: string,
  // cancelledOrders:string,
  contact:string,
  email:string;
  document:string;
  dob:string;
  drivertype:string,
  drivercity:string,
  action:string,
  // address:string,
  message:string,
  // totalOrders:string,
  // pendingOrders:string,
  // totalSales:string,
  vehicletype:string
}
@Component({
  selector: 'app-driver-request',
  templateUrl: './driver-request.component.html',
  styleUrls: ['./driver-request.component.css']
})
export class DriverRequestComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  closeResult: string;
  displayedColumns: string[] = ['serial_no', 'name', 'lastName', 'DOB' ,'id','contact','email','drivertype', 'drivercity','document','message','vehicletype','status','action'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private modalService: NgbModal) {
    this.dataSource = new MatTableDataSource(this.table);
  }
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
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
      lastName:"Joe",
      dob:"01/01/1990",
      id: "#sand334553",
      contact:"+91-33434343",
      email:"sand@example.com",
      drivertype:"Independent",
      drivercity:"London",
      document:'assets/images/gallery/driving-licence.jpg',
      // address:"#454 1st Block, Rammurthy, Bangalore-560016",
      message:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      vehicletype:"Bike",
      // cancelledOrders:"0",
      // pendingOrders:"0",
      // totalOrders:"50",
      // totalSales:"500",
      status:"Pending",
      action:"0",
    },
    {
      serial_no:"2",
      name: 'Rohan',
      lastName:"Doe",
      dob:"01/01/1990",
      id: "#rohan334553",
      contact:"+91-33434343",
      email:"sand@example.com",
      drivertype:"Student",
      drivercity:"London",
      document:'assets/images/gallery/driving-licence.jpg',
      // address:"#454 1st Block, Rammurthy, Bangalore-560016",
      message:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      // completedOrders:"10",
      // cancelledOrders:"0",
      // pendingOrders:"30",
      // totalOrders:"40",
      // totalSales:"500",
      vehicletype:"E-bike",
      status:"Pending",
      action:"0",
    },
    {
      serial_no:"3",
      name: 'John',
      lastName:"Root",
      dob:"01/01/1990",
      id: "#rohan334553",
      contact:"+91-33434343",
      email:"sand@example.com",
      drivertype:"Independent",
      drivercity:"London",
      document:'assets/images/gallery/driving-licence.jpg',
      // address:"#454 1st Block, Rammurthy, Bangalore-560016",
      message:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      vehicletype:"Scooter",
      // completedOrders:"20",
      // cancelledOrders:"10",
      // pendingOrders:"10",
      // totalOrders:"30",
      // totalSales:"400",
      status:"Pending",
      action:"0",
    },

  ]


  time = {hour: 13, minute: 30};
  // toppings = new FormControl();
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

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
edituserModal(edituser) {
  this.modalService.open(edituser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
vendorConfirmModal(vendorConfirm) {
  this.modalService.open(vendorConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
documentModal(document) {
  this.modalService.open(document, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
}
vendorUnconfirmModal(vendorUnconfirm) {
  this.modalService.open(vendorUnconfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
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
