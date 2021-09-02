import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {
  checked:string;
  VendorForm:FormGroup
  selectedCountry : any = CountryISO.India;
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  days:string[]=['sun','mon','tue','wed','thu','fri','sat']
  documentOne: any;
  documentTwo: any;
  VendorImage: any;
  ProfileImageUrl: any;
  Doc1: string | ArrayBuffer;
  Doc2: string | ArrayBuffer;
  lat: any;
  lng: any;
  VendorId: any;
  isLoading: boolean;
  storeLat:Number
  storeLng:Number
  
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  StoreImage: any;
  StoreFile: any;
    constructor(private fb:FormBuilder,private service:CommonService,private toaster:ToastrService,private router:Router) {
      this.VendorForm = this.fb.group({
        address:['',[Validators.required]],
        firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
        lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
        about:['',[Validators.required]],
        phoneNo:['',Validators.required],
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
        StoreAddress:['',Validators.required],
        StoreName:['',Validators.required]
      })
     }
    ngOnInit(): void {

    }
    sendFile(fileData,ref) {
      let formdata = new FormData()
      formdata.append('media', fileData);
      this.service.postApi(`upload/media/`,formdata).subscribe((res: any) => {
        console.log("Imager api called",res);
        if ([200,201].includes(res.code)) {
          if(ref=='one'){
            this.documentOne = res.data[0].id
          }else if(ref=='two'){
            this.documentTwo = res.data[0].id
          }else if(ref=='profile'){
            this.VendorImage = res.data[0].id
         
          }
          else if(ref=='store'){
            this.StoreFile = res.data[0].id
          }
        }
      });
    }
    uploadFile(event,ref) {
      if (event.target.files && event.target.files[0]) {
        var type = event.target.files[0].type;
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
          let fileData = event.target.files[0];
          this.sendFile(fileData,ref)
          reader.onload = (event) => { // called once readAsDataURL is completed
            if(ref=='one'){
              this.Doc1 =fileData.name
            }else if(ref=='two'){
              this.Doc2 = fileData.name;
            }else if(ref=='profile'){
              this.ProfileImageUrl = fileData.name;
            }
            else if(ref=='store'){
              this.StoreImage = fileData.name;
            }
          }
        }
      }
    }
    public AddressChange(address: any,ref,Istore) {
      if(Istore=='store'){
        this.VendorForm.controls['StoreAddress'].setValue(ref.value)
        this.storeLat = address.geometry.location.lat()
        this.storeLng = address.geometry.location.lng()
      }else{
      this.VendorForm.controls['address'].setValue(ref.value)
      this.lat = address.geometry.location.lat()
      this.lng = address.geometry.location.lng()
      }
    }
    addvendor() {
      if(this.VendorForm.valid){
        let obj = {
          "first_name":this.VendorForm.value.firstName,
          "longitude":this.lng?this.lng:null, 
          "latitude":this.lat?this.lat:null, 
          "last_name":this.VendorForm.value.lastName,
          "phone_no":this.VendorForm.controls['phoneNo'].value?.number?this.VendorForm.controls['phoneNo'].value?.number?.replace(/ /g,''):null,
          "country_code":this.VendorForm.controls['phoneNo'].value?.dialCode?this.VendorForm.controls['phoneNo'].value?.dialCode:null,
          "email":this.VendorForm.value.email?this.VendorForm.value.email:null,
          "address":this.VendorForm.value.address,
          "about_us":this.VendorForm.value.about,
          "password":"apptunix",
          "image":this.VendorImage?this.VendorImage:null,
          "vendor_document": [
                  {
                      "image": this.documentOne?this.documentOne:null
                  },
                  {
                      "image": this.documentTwo?this.documentTwo:null
                  }],
                  "store_details":{
                      "name":this.VendorForm.value.StoreName,
                      "address":this.VendorForm.value.StoreAddress, 
                      "longitude":this.storeLng, 
                      "latitude":this.storeLat, 
                      "image":this.StoreFile
                  }
              }
        this.service.post(`vendor/create-vendor/`, obj).subscribe((res:any) => {
           this.toaster.success("Vendor added successfully.", "Success!");
            this.router.navigate(['/pages/vendors']);
            this.isLoading = false;
       
        }, _ => {
          this.isLoading = false
        })
      }else{
        this.VendorForm.markAllAsTouched()
      }
    }

}
