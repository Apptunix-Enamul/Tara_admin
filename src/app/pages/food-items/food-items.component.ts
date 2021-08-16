import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss']
})
export class FoodItemsComponent implements OnInit {

 
  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  Select = new FormControl();
  Selected: string[] = ['one', 'two', 'three'];
  dishType: string[] = ['Soya Chap', 'Burger','Sandwich'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  deleteBoxModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }

  addUserModal(addUser) {
    this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editBoxModal(editModel) {
    this.modalService.open(editModel, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addsubCategoryModel(addsubCategory) {
    this.modalService.open(addsubCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addCategoryModel(addCategory) {
    this.modalService.open(addCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
}
