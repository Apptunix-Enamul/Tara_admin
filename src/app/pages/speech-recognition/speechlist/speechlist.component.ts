import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-speechlist',
  templateUrl: './speechlist.component.html',
  styleUrls: ['./speechlist.component.css']
})
export class SpeechlistComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  addspeech(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editspeech(content4) {
    this.modalService.open(content4, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
