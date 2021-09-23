import { Component, AfterViewInit, OnInit, HostListener } from "@angular/core";
import { ROUTES } from "./menu-items";
import { RouteInfo } from "./sidebar.metadata";
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Event,
} from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "src/environments/environment";
import { NgxSpinner, NgxSpinnerService } from "ngx-spinner";
declare var $: any;

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  showMenu = "";
  titles: any[] = [
    "Users",
    "Vendors",
    "Speech Recognition",
    "Orders",
    "Geofence",
  ];
  permissions = JSON.parse(sessionStorage.getItem(environment.storageKey))
    .permissions;
  Role = JSON.parse(sessionStorage.getItem(environment.storageKey))?.role;
  checkArr = [];
  showSubMenu = "";
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = "0";
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    for (let param of this.permissions) {
      if (param?.is_view == true) {
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
  ClickListen() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }

      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }

      if (event instanceof NavigationError) {
        this.spinner.hide();
      }
    });
  }
}
