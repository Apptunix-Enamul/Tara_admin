import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }



  back()
{
  history.back()
}
itemShowModal(itemShow){
  this.modalService.open(itemShow, { size: 'sm' });
}
}