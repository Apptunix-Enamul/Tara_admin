import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  toppings = new FormControl();
  kitchenList: string[] = ['All','KFC', 'Mcdonalds', 'Leuven', 'Pizza Hut', 'Dominos'];
  categoryList: string[] = ['#154544', '#854544', '#654544', '#454544', '#254544'];
  dishList: string[] = ['Veg', 'Non-veg', 'Vegon', 'Gluten Free'];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  promocodeModal(promocode) {
    this.modalService.open(promocode, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  couponModal(coupon) {
    this.modalService.open(coupon, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
}
