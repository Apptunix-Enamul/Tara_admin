import {  AfterViewInit,Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { CommonService } from 'src/app/_services/common.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

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
  // audio: string,
  name: string,
  address:string,
  ordered_item:string,
  price:string,
}
@Component({
  selector: 'app-vendordetail',
  templateUrl: './vendordetail.component.html',
  styleUrls: ['./vendordetail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VendordetailComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  closeResult: string;
  //table: any
  lat:any = 40.7127753;
  lng:any = -74.0059728;
  displayedColumns: string[] = ['serial_no','name', 'ordered_item', 'address', 'price'];
  displayedColumns2: string[] = ['serial_no','name', 'ordered_item', 'address', 'price'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  id: any;
  VendorDetails: any;

  ngOnInit(){}
  constructor(private modalService: NgbModal,private service:CommonService,private route:ActivatedRoute) {
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
      this.service.get(`vendor/get-vendor-by-id/${params?.id}/`).subscribe((data:any)=>{
      if([200,201].includes(data.code)){
     this.dataSource = new MatTableDataSource(data.data);
     this.VendorDetails = data?.data
     this.lat = Number(this.VendorDetails?.latitude)
     this.lng = Number(this.VendorDetails?.longitude)
      }
      })
   })
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  
  discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  table = [
    {   
      serial_no:"1",
      // audio:"assets/media/example.mp3",
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
      // audio:"assets/media/example.mp3",
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
      // audio:"assets/media/example.mp3",
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
