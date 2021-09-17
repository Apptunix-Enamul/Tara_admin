import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SOSComponent implements OnInit {
  closeResult: string;
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;
  ngOnInit(): void {
  }
  constructor(private modalService: NgbModal) {
    this.permissions = JSON.parse(
      sessionStorage.getItem(environment.storageKey)
    ).permissions;
    if (this.permissions.length==0 || this.permissions == null ||this.permissions == undefined) {
      this.editPermission = true;
      this.viewPermission = true;
    } else {
      this.editPermission = this.permissions[10].is_add_edit;
      this.viewPermission = this.permissions[10].is_view;
    }
  }
  locationmodal(location) {
    this.modalService.open(location, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addreviewModal(addreview) {
    this.modalService.open(addreview, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  reviewDeleteModal(reviewDelete) {
    this.modalService.open(reviewDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
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
