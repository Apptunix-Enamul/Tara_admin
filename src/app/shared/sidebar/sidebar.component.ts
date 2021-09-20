import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  permissions =JSON.parse(sessionStorage.getItem(environment.storageKey)).permissions
  Role = JSON.parse(sessionStorage.getItem(environment.storageKey))?.role
  checkArr = [];
  showSubMenu = '';
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor( private modalService: NgbModal,private router: Router,private route: ActivatedRoute) {
    for(let param of this.permissions) {
      if(param?.is_view==true){
        this.checkArr.push(param?.module?.name);
      }
    }
  }

  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter((sidebarnavItem) => {
      if (this.Role == 4) {
        for (let index = 0; index < this.checkArr.length; index++) {
          if (this.checkArr[index] == sidebarnavItem.title) {
            return sidebarnavItem;
          }
        }
      } else {
        return sidebarnavItem;
      }
    });
    
  }
}
