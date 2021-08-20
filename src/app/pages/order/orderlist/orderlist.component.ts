import { Component, OnInit,ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl,FormGroup} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';

export interface UserData {
  audio: string,
  name: string,
  contact:string,
  address:string,
  ordered_item:string,
  price:string,
  action:string,
  vendor:string,
  vendormail:string,
  payment?:string,
  status:string,
}
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  closeResult: string;
  // displayedColumns: string[] = ['serial_no', 'audio', 'hotelName','name' ,'id','contact','comment','address','driver','orderdate','deliverydate','orderStatus','totalSales','action'];
  displayedColumns: string[] = ['serial_no', 'name', 'ordered_item', 'address', 'price', 'vendor', 'action'];
  displayedColumns1: string[] = ['serial_no', 'name', 'ordered_item', 'address', 'price', 'vendor', 'payment', 'action'];
  displayedColumns2: string[] = ['serial_no', 'name', 'ordered_item', 'address', 'price', 'vendor', 'payment','status'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private modalService: NgbModal) {
    this.dataSource = new MatTableDataSource(this.table);
  }
  toppings = new FormControl();
  toppingList: string[] = ['Jamas Thomas', 'Rony Roy', 'Vicky Andy', 'john Vick', 'Alex Harry', 'Harry Roy'];
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  table = [
    {   
      serial_no:"1",
      audio:"assets/media/example.mp3",
      ordered_item:"Banana : 10",
      name: 'Sandy roy',
      contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 200",
      vendor:"vendor 1",
      vendormail:"vendor@gmail.com",
      payment:"Success",
      action:"0",
      status:"Completed",
    },
    {    
      serial_no:"2",
      audio:"assets/media/example.mp3",
      ordered_item:"Apple : 10",
      name: 'Rohan Smith',
      contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 250",
      vendor:"vendor 2",
      vendormail:"vendor@gmail.com",
      payment:"Pending",
      action:"1",      
      status:"Rejected",
    },
    {    
      serial_no:"3",
      audio:"assets/media/example.mp3",
      ordered_item:"Apple : 3",
      name: 'john Doe',
      contact: '+91 9874563210',
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      price:"$ 150",
      vendor:"vendor 3",
      vendormail:"vendor@gmail.com",
      payment:"Success",
      action:"1",
      status:"Completed",
    },
  ]
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  orderConfirmModal(orderConfirm) {
    this.modalService.open(orderConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  changedriverModal(changedriver) {
    this.modalService.open(changedriver, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  } commentModal(comment) {
    this.modalService.open(comment, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  mapModal(map) {
    this.modalService.open(map, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
  }
}
