import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  SubadminForm:FormGroup
  selectedCountry : any = CountryISO.India;
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor(private fb:FormBuilder,private service:CommonService,private toaster:ToastrService,private router:Router) {
    this.SubadminForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      phoneNo:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
      // permission:this.fb.array([


      // ]),
      //Dashboard Permissions
    isDashboardAdd: [false],
    isDashboardView: [false],
  // Users Permissions
    isUsersAdd: [false],
    isUsersView: [false],
  // isVendorAdd Permissions
    isVendorAdd: [false],
    isVendorView: [false],
   // isSpeechadd Permissions
    isSpeechadd: [false],
    isSpeechView: [false],

    // isOrdersAdd Permissions
    isOrdersAdd: [false],
    isOrdersView: [false],

    // isProductsAdd Permissions
    isProductsAdd: [false],
    isProductsView: [false],

    // isRevenueAdd type Permissions
    isRevenueAdd: [false],
    isRevenueview: [false],
// Notification Permissions
    isNotificationAdd: [false],
    isNotificationView: [false],

    // isCustomAdd Permissions
    isCustomAdd: [false],
    isCustomView: [false],
// SoS permission
    isSOSAdd: [false],
    isSOSview: [false],
    // Membership
    isMembershipAdd: [false],
    isMembershipView: [false],
    // Geofence
    isGeofenceAdd: [false],
    isGeofenceView: [false],
    // CMS
    isCMSAdd: [false],
    isCMSView: [false],
    })
}
ngOnInit(): void {
  }
  SaveData(){
if(this.SubadminForm.valid){
  this.DataSubmission()
}else{
  this.SubadminForm.markAllAsTouched()
}
}

DataSubmission(){
let obj = {
  "first_name": this.SubadminForm.value.firstName,
  "last_name": this.SubadminForm.value.lastName,
  "image": "1",
  "email":this.SubadminForm.value.email,
  "phone_no":this.SubadminForm.controls['phoneNo'].value?.number?this.SubadminForm.controls['phoneNo'].value?.number?.replace(/ /g,''):null,
  "country_code":this.SubadminForm.controls['phoneNo'].value?.dialCode?this.SubadminForm.controls['phoneNo'].value?.dialCode:null,
  "password": this.SubadminForm.value.password,
  "permissions": [
      {
          "module": 'Dashboard',
          "is_add_edit":this.SubadminForm.value.isDashboardAdd,
          "is_view": this.SubadminForm.value.isDashboardView
      },
      {
          "module": 'User',
          "is_add_edit": this.SubadminForm.value.isUsersAdd,
          "is_view": this.SubadminForm.value.isUsersView
      },
      {
          "module": 'Vendor',
          "is_add_edit": this.SubadminForm.value.isVendorAdd,
          "is_view": this.SubadminForm.value.isVendorView
      },
      {
          "module": 'Speech',
          "is_add_edit": this.SubadminForm.value.isSpeechadd,
          "is_view": this.SubadminForm.value.isSpeechView
      },
      {
          "module": 'Order',
          "is_add_edit": this.SubadminForm.value.isOrdersAdd,
          "is_view": this.SubadminForm.value.isOrdersView
      },
      {
          "module": 'Product',
          "is_add_edit": this.SubadminForm.value.isProductsAdd,
          "is_view": this.SubadminForm.value.isProductsView
      },
      {
          "module": 'Revenue',
          "is_add_edit": this.SubadminForm.value.isRevenueAdd,
          "is_view": this.SubadminForm.value.isRevenueview
      },
      {
          "module": 'Notifications',
          "is_add_edit": this.SubadminForm.value.isNotificationAdd,
          "is_view": this.SubadminForm.value.isNotificationView
      },
      {
          "module": 'Customer',
          "is_add_edit": this.SubadminForm.value.isCustomAdd,
          "is_view": this.SubadminForm.value.isCustomView
      },
      {
          "module": 'SOS',
          "is_add_edit":this.SubadminForm.value.isSOSAdd,
          "is_view": this.SubadminForm.value.isSOSview
      },
      {
          "module": 'Membership',
          "is_add_edit": this.SubadminForm.value.isMembershipAdd,
          "is_view": this.SubadminForm.value.isMembershipView
      },
      {
          "module": 'Geofence',
          "is_add_edit": this.SubadminForm.value.isGeofenceAdd,
          "is_view": this.SubadminForm.value.isGeofenceView
      },
      {
        "module": 'CMS',
        "is_add_edit": this.SubadminForm.value.isCMSAdd,
        "is_view": this.SubadminForm.value.isCMSView
    }
  ]
}
this.service.post(`sub-admin/create/`,obj).subscribe((res:any)=>{
  if ([200,201].includes(res.code)){
    this.toaster.success('Sub Admin created','Success')
    this.router.navigate(['/'])
  }
})
}

}
