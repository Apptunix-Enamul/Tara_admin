import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import { allCountries } from 'src/app/_helpers/country';
@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvendorComponent implements OnInit {
checked:string;
days:string[]=['sun','mon','tue','wed','thu','fri','sat']
 
  id: any;
  VendorForm:FormGroup
  selectedCountry : any = CountryISO.India;
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  documentOne: any;
  documentTwo: any;
  VendorImage: any;
  ProfileImageUrl: any;
  Doc1: string | ArrayBuffer;
  Doc2: string | ArrayBuffer;
  lat: any;
  lng: any;
  isLoading: boolean;
  storeLat:Number
  storeLng:Number
  
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  StoreImage: any;
  StoreFile: any;
  StoreId: any;
  constructor(private fb:FormBuilder,private service:CommonService,private toaster:ToastrService,private router:Router,private route:ActivatedRoute) {
    this.VendorForm = this.fb.group({
      address:['',[Validators.required]],
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      about:['',[Validators.required]],
      phoneNo:[''],
      email:['',[Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
      StoreAddress:['',Validators.required],
      StoreName:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.GetVendor()
  }
  GetVendor(){
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
      this.service.get(`vendor/get-vendor-by-id/${params?.id}/`).subscribe((data:any)=>{
      if([200,201].includes(data.code)){
        this.StoreId = data?.data?.store_details[0].id
        this.storeLat = data?.data?.store_details[0].latitude
        this.storeLng = data?.data?.store_details[0].longitude
        this.setFormsValue(data?.data)
        this.StoreImage = data?.data?.store_details[0].image?.media_file_url
   this.StoreFile = data?.data?.store_details[0].image?.id
   this.documentOne =data?.data?.vendor_document[0].image?.id
   this.Doc1 = data?.data?.vendor_document[0].image?.media_file_url
   this.documentTwo = data?.data?.vendor_document[1].image?.id
   this.Doc2 = data?.data?.vendor_document[1].image?.media_file_url
   this.lat = Number(data?.data?.latitude)
   this.lng = Number(data?.data?.longitude)
   let findIndex = allCountries.find(x=>{
    const phone = data?.data?.country_code?.split('+');
    return x[2] == phone[1].trim();
  })
  this.selectedCountry = (findIndex != undefined)?findIndex[1]:CountryISO.India;
      }
      })
   })
  }
  setFormsValue(obj){
    this.VendorForm.controls['firstName'].setValue(obj?.first_name)
    this.VendorForm.controls['lastName'].setValue(obj?.last_name)
    this.VendorForm.controls['about'].setValue(obj?.about_us)
    this.VendorForm.controls['address'].setValue(obj?.address)
    this.VendorForm.controls['phoneNo'].setValue(obj?.phone_no?obj?.phone_no:null)
    this.VendorForm.controls['email'].setValue(obj?.email?obj?.email:'')
    this.VendorForm.controls['StoreName'].setValue(obj?.store_details[0].name)
    this.VendorForm.controls['StoreAddress'].setValue(obj?.store_details[0].address)
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
  UpdateVendor() {
    if(this.VendorForm.valid){
      let obj = {
        "role":"2",
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
                    "image":this.StoreFile?this.StoreFile:null,
                    "id":this.StoreId,
                }
            }
      this.service.put(`vendor/update-vendor/${this.id}/`, obj).subscribe((res:any) => {
         this.toaster.success("Vendor updated successfully.", "Success!");
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
