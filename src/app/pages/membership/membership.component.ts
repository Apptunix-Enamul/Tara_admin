import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  addplan(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editplan(content4) {
    this.modalService.open(content4, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }

}
