import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-addtimeslot',
  templateUrl: './addtimeslot.component.html',
  styleUrls: ['./addtimeslot.component.css']
})
export class AddtimeslotComponent implements OnInit {

  constructor() { }
  toppings = new FormControl();
  toppingList: string[] = ['None', 'Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5', 'Driver 6'];
  ngOnInit(): void {
  }

}
