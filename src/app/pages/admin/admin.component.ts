import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  SubAdminData: any;
  count: any;
  timer: number;
  IsActive:any=undefined
  AdminId: any;
  SearchValue: string = '';
  page:number = 1
  PageSize:number = 10
  constructor(private modalService: NgbModal,private service:CommonService,private toaster:ToastrService) {}

  ngOnInit(): void {
    this.GetSubAdmin()
  }
// This is for the first modal
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete,id) {
  this.AdminId = id
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
vendorConfirmModal(vendorConfirm) {
  this.modalService.open(vendorConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
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
Filter(event: any) {
  window.clearTimeout(this.timer);
  this.timer = window.setTimeout(() => {
    let filterValue = (event.target as HTMLInputElement).value;
    this.SearchValue=filterValue;
   this.GetSubAdmin();
  }, 1000)
}
DeleteAdmin(){
  this.service.delete(`sub-admin/delete/${this.AdminId}/`).subscribe((res:any)=>{
    if([200,201].includes(res.code)){
      this.GetSubAdmin()
      this.modalService.dismissAll()
      this.toaster.success('Sub admin deleted successfully','Deleted')
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
  this.GetSubAdmin();
  return e;
}
FilterByStatus(ref){
  this.SearchValue =''
this.IsActive = ref
 this.GetSubAdmin()
}
GetSubAdmin(){
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
                "value": this.SearchValue,
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

  this.service.post(`sub-admin/get-all-pagination-list/`,obj).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get subAdmin data',res);
    this.SubAdminData = res?.data
    this.count = res?.recordsTotal
    
}
  })
}
changeStatus(event, id) {
  this.toaster.clear()
  const data = {
    is_active: event.checked,
  };
  this.service.put(`sub-admin/change-status/${id}/`, data).subscribe((res: any) => {
    if([200,201].includes(res.code)){
   this.toaster.success(event.checked?'Status Activated':'Status Deactivated',event.checked?'Activated':'Deactivated')
 }
 });
}
}
