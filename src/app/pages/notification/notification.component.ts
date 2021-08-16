import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toppings = new FormControl();
  toppingList: string[] = ['All','All Users','Specific Users','All Vendors','Specific Vendors' ];
}
