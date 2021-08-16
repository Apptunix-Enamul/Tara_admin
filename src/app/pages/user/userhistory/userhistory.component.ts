import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.css']
})
export class UserhistoryComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  closeResult: string;
  ngOnInit(): void {
  }
  userHistoryModal(userHistory) {
    this.modalService.open(userHistory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
