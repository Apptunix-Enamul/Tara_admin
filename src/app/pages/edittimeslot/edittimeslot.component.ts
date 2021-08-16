import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-edittimeslot',
  templateUrl: './edittimeslot.component.html',
  styleUrls: ['./edittimeslot.component.css']
})
export class EdittimeslotComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['None','Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5', 'Driver 6'];
  constructor() { }

  ngOnInit(): void {
  }

}
