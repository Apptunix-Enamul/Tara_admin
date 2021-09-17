import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;
  constructor(private modalService: NgbModal) {
    this.permissions = JSON.parse(
      sessionStorage.getItem(environment.storageKey)
    ).permissions;
    if (this.permissions.length==0 || this.permissions == null ||this.permissions == undefined) {
      this.editPermission = true;
      this.viewPermission = true;
    } else {
      this.editPermission = this.permissions[11].is_add_edit;
      this.viewPermission = this.permissions[11].is_view;
    }
   }

  ngOnInit(): void {
  }
  addplan(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editplan(content4) {
    this.modalService.open(content4, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }

}
