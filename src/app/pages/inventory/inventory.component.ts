import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  closeResult: string;
  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  dishType: string[] = ['Category 1', 'Category 2','Category 3'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  constructor(private modalService: NgbModal) {}
  
  ngOnInit(): void {
  }
  boxDeleteModal(boxDelete) {
    this.modalService.open(boxDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  inventoryModal(inventory) {
    this.modalService.open(inventory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }

  
}
