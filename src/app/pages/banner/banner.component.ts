import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  orderConfirmModal(orderConfirm) {
    this.modalService.open(orderConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  addBannerModal(banner) {
    this.modalService.open(banner, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  imagesBoxModal(imagesBox) {
    this.modalService.open(imagesBox, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
