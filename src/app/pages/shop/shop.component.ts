import { Component, OnInit,ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
export interface UserData {
  serial_no:string,
  name: string,    
  //lastname: string,    
  // completedOrders:string,
  id: string,    
  frachise:string,
  contact:string,
  email:string;
 status:string,
  action:string,
  address:string,
  message:string,
  // totalOrders:string,
  // pendingOrders:string,
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  closeResult: string;
  displayedColumns: string[] = [ 'serial_no','name' ,'id','email','contact','frachise','message','address','status','action'];
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
      serial_no:"1",  
      name: 'Sandy Doe', 
     // lastname:'Doe',  
      id: "#sand334553",    
      contact:"+91-33434343",
      email:"sand@example.com",
      address:"15/05/1992",
      frachise:"Leuven",
      message:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      // cancelledOrders:"0",
      // pendingOrders:"0",
      // totalOrders:"50",
      status:"",
      action:"1",      
    },
    {    
      serial_no:"2",
      name: 'Rohan Doe',  
      //lastname:'Doe',  
      id: "#rohan334553",  
      contact:"+91-33434343",
      email:"sand@example.com",  
      address:"15/05/1992",
      frachise:"KFC",
      message:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      // cancelledOrders:"0",
      // pendingOrders:"30",
      // totalOrders:"40",
      status:"",
      action:"1",      
    },
    {  
      serial_no:"3",  
      name: 'john Root',  
      //lastname:'Root',  
      id: "#rohan334553",
      contact:"+91-33434343",
      email:"sand@example.com", 
      address:"15/05/1992",  
      frachise:"Leuven",
      message:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      // cancelledOrders:"10",
      // pendingOrders:"10",
      // totalOrders:"30",
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
edituserModal(edituser) {
  this.modalService.open(edituser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
vendorConfirmModal(vendorConfirm) {
  this.modalService.open(vendorConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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

