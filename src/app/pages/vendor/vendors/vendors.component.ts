import { Component, OnInit,ViewChild, ViewEncapsulation} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl} from '@angular/forms';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import { TooltipPosition } from '@angular/material/tooltip';
import { ExportToCsv } from 'export-to-csv';
import { environment } from 'src/environments/environment';
export interface UserData {
  serial_no:string,
  name: string,    
  lastname: string,    
  // completedOrders:string,
  id: string,    
  restaurant:string,
  restaurant_delivery:string,
  restaurant_type:string,  
  contact:string,
  dob:string,
  message:string,
  email:string;
 status:string,
  action:string,
  address:string,
  doc:string,
  // totalOrders:string,
  // pendingOrders:string,
}
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VendorsComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  closeResult: string;
  SearchValue:any = ''
  page:number = 1
  PageSize:number = 10
  count:number = 0
  displayedColumns: string[] = [ 'serial_no','name', 'lastname', 'restaurant', 'contact', 'email','address','message', 'doc','status','action'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  vendorList: any;
  VendorDocOne: any;
  VerndorDocTwo: any;
  timer: number;
  IsnotEmpty:any
  VendorId: any;
  ExportPdf: any;
  IsActive:any=''
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;
  constructor(private modalService: NgbModal, private service:CommonService,private router:Router,private fb:FormBuilder,private toaster:ToastrService) {
    this.permissions = JSON.parse(
      sessionStorage.getItem(environment.storageKey)
    ).permissions;
    if (this.permissions.length==0 || this.permissions == null ||this.permissions == undefined) {
      this.editPermission = true;
      this.viewPermission = true;
    } else {
      this.editPermission = this.permissions[2].is_add_edit;
      this.viewPermission = this.permissions[2].is_view;
    }
  }
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  ngOnInit(): void {
    this.GetVendor()
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
 discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  
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
openWindowCustomClass(content3,doc) {
  this.VendorDocOne = doc[0].image?.media_file_url
  this.VerndorDocTwo = doc[1].image?.media_file_url
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete,id) {
  this.VendorId = id
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
changeStatus(event, id) {
  this.toaster.clear()
  const data = {
    is_active: event.checked,
  };
  this.service.put(`vendor/change-vendor-status-by-id/${id}/`, data).subscribe((res: any) => {
    if([200,201].includes(res.code)){
   this.toaster.success(event.checked?'Status Activated':'Status Deactivated',event.checked?'Activated':'Deactivated')
 }
 });
}
FilterByStatus(ref){
  this.SearchValue =''
this.IsActive = ref
 this.GetVendor()

}
GetVendor(){
  let obj = {
    "draw": 2,
    "is_approved":true,
    "is_active":this.IsActive,
    "columns": [
        {
            "data": "first_name",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "last_name",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "phone_number",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "email",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "id",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        }
    ],
    "order": [
        {
            "column": 3,
            "dir": "undefined"        }
    ],
    "start": this.page,
    "length": this.PageSize,
    "search": {
        "value": this.SearchValue,
        "regex": false
    }
}
if(this.IsActive==''){
  delete obj.is_active
}
  this.service.post(`vendor/vendor-list-pagination/`,obj).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
     this.dataSource = new MatTableDataSource(res.data);
    this.count = res?.recordsTotal
    this.IsnotEmpty = res.data
}
  })
}
DeleteVendor(){
  this.service.delete(`vendor/delete-by-id/${this.VendorId}/`).subscribe((res:any)=>{
    if([200,201].includes(res.code)){
      this.GetVendor()
      this.modalService.dismissAll()
      this.toaster.success('Vendor deleted successfully','Deleted')
    }
  })
}

onPaginateChange(e): PageEvent {
      if (e.pageIndex == 0) {
        this.page = e.pageIndex;
      } else {
        if (e.previousPageIndex < e.pageIndex) {
          this.page =this.page+ e.pageSize;
        } else {
          this.page =this.page-e.pageSize;
        }
      }
      this.PageSize = e.pageSize
      this.GetVendor();
      return e;
  }
Filter(event: any) {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      let filterValue = (event.target as HTMLInputElement).value;
      this.SearchValue=filterValue;
     this.GetVendor();
    }, 1000)
  }
  Export(){
    this.service.get(`vendor/get-all-vendor-list/`).subscribe((res:any)=>{
      console.log('Called',res.data);
      this.ExportPdf = res.data
        this.Expotable(this.ExportPdf)
    })
  }
  Expotable(Exportdata){
    let dataArr = [];
    Exportdata.forEach((element, ind) => {
      dataArr.push({
      '#': ind + 1,
      'First name': element?.first_name ? element.first_name : '--',
      'Last name': element?.last_name ? element?.last_name : '--',
      'Store name':element?.store_details[0] ? element?.store_details[0].name : '--',
       'Store address':element?.store_details[0] ? element?.store_details[0].address : '--',
      'Phone no': (element?.country_code&&element?.phone_no)?element?.country_code+" "+element?.phone_no:'--',
      'Email id': element.email ? element.email : '--',
      'Address': element.address ? element.address : '--',
      'About': element.about_us ? element.about_us : '--',
      'Status': element.is_active ? 'Active' : 'Inactive',
      })
      })
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Vendor details',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
const csvExporter = new ExportToCsv(options);
csvExporter.generateCsv(dataArr);
  }
}
