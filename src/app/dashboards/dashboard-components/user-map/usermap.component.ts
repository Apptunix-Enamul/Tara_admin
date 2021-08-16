import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-usermap',
  templateUrl: './usermap.component.html',
  styleUrls: ['./usermap.component.scss'],
})
export class UsermapComponent {
  closeResult: string;
  constructor(private modalService: NgbModal) {}


  userprofileModal(userprofile) {
  this.modalService.open(userprofile, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
//faultbike
faultbikeModal(faultbike) {
  this.modalService.open(faultbike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
//availablebike
availablebikeModal(availablebike) {
  this.modalService.open(availablebike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
