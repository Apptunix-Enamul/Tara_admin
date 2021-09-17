import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;

  constructor() { 
    this.permissions = JSON.parse(
      sessionStorage.getItem(environment.storageKey)
    ).permissions;
    if (this.permissions.length==0 || this.permissions == null ||this.permissions == undefined) {
      this.editPermission = true;
      this.viewPermission = true;
    } else {
      this.editPermission = this.permissions[7].is_add_edit;
      this.viewPermission = this.permissions[7].is_view;
    }
  }

  ngOnInit(): void {
  }
  toppings = new FormControl();
  toppingList: string[] = ['All','All Users','Specific Users','All Vendors','Specific Vendors' ];
}
