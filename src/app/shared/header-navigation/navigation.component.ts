import { Component, AfterViewInit, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/_services/common.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit, OnInit{
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  public element1: any;
  VendorId: any;
  VendorDetails: any;
  ProfileImageUrl: any;
  constructor(private modalService: NgbModal,private router:Router,private service:CommonService,private spinner:NgxSpinnerService) {
    this.VendorId= JSON.parse(sessionStorage.getItem(environment.storageKey)).id;
    this.spinner.hide()
  }
  ngOnInit(){
    this.GetVendorProfile()
    this.service.subject.subscribe(res => {
      if (res == true) {
        this.GetVendorProfile();
      }
    })
  }
  Logout(){
    sessionStorage.removeItem(environment.storageKey);
    this.router.navigate(['/login']);
  }
  GetVendorProfile(){
    this.service.get(`vendor/get-vendor-by-id/${this.VendorId}/`).subscribe((res:any)=>{
      console.log('Vendor get fromnav',res);
      if([200,201].includes(res.code)){
     this.VendorDetails = res.data;
     this.ProfileImageUrl =   res?.data?.image?.media_file_url
  }
    })
  }
  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];
  addBikeModal(addBike) {
    this.modalService.open(addBike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg',backdrop:"static"});
  }

  ngAfterViewInit() {}
   openBox() {
    let element = document.getElementById("notification");    
    element.classList.toggle("sidebar_slide");
    
  }
  closeBox(){
    let element1 = document.getElementById("arrow-close").parentElement;
    element1.classList.remove("sidebar_slide");
  }
}
