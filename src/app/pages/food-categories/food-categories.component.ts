import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import { CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss']
})
export class FoodCategoriesComponent implements OnInit {
  panelOpenState = false;
  closeResult: string;
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
 
  ];
  horizontalOrientation = [
    {'name':'Thali', 'tax':'6%', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    {'name':'Fast Food','tax':'6%', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    // {'name':'kaali', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    // {'name':'manali', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
  ];
  
  listfooditems = [
    {'name':'Soya Chap'},
    {'name':'Burger'},
   
  ];
  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  dishType: string[] = ['Veg', 'Non-Veg'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  active = 1;
  constructor(private modalService: NgbModal) {}
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
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  orientationDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.horizontalOrientation,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
 
  orientationDrop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.listfooditems,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDrop1(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

