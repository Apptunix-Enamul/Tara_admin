import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  closeResult: string;
  ngOnInit(): void {
  }
  constructor(private modalService: NgbModal) {}
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
