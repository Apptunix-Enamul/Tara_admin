import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { allCountries } from 'src/app/_helpers/country';
import { CommonService } from 'src/app/_services/common.service';
import { PermissionsArray } from 'src/app/_services/permissions'
@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit , AfterViewInit{
  SubadminForm:FormGroup
  selectedCountry : any = CountryISO.India;
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  @ViewChild('inputMessage')
inputMessageRef: ElementRef;
  subAdminPicId: any;
  profileUrl: any;
  permissionArray: any[]=[];SubAdminData: any;
  id: any;
  constructor(private fb:FormBuilder,private service:CommonService,private toaster:ToastrService,private router:Router,private route:ActivatedRoute) {
    this.SubadminForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      phoneNo:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    })
}
ngAfterViewInit(){
  this.GetSubAdmin()
}
ngOnInit(): void {
  // this.permissionArray=PermissionsArray.permissions
  this.GetSubAdmin()
  setTimeout(() => {
    this.GetAdminById()
  }, 100);
  }
sendFile(fileData) {
    let formdata = new FormData()
    formdata.append('media', fileData);
    this.service.postApi(`upload/media/`,formdata).subscribe((res: any) => {
      console.log("Imager api called",res);
      if ([200,201].includes(res.code)) {
        this.toaster.success('File uploaded successfully','File')
          this.subAdminPicId = res.data[0].id
      }
    });
  }
  uploadFile(event) {
    if (event.target.files && event.target.files[0]) {
      var type = event.target.files[0].type;
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
        let fileData = event.target.files[0];
        this.sendFile(fileData)
        reader.onload = (event) => { // called once readAsDataURL is completed
            this.profileUrl =fileData.name
        }
      }else{
        this.toaster.error('File format not supported','File Error')
      }
    }
  }

  SaveData(){

if(this.SubadminForm.valid){
  this.DataSubmission()
}else{
  this.SubadminForm.markAllAsTouched()
  // document.body.scrollTop = 0;
  //  document.documentElement.scrollTop = 0;
   this.inputMessageRef.nativeElement.scrollIntoView({ behavior: 'smooth'});
}
}

DataSubmission(){
  this.permissionArray.forEach(v => delete v.label)
let obj = {
  "first_name": this.SubadminForm.value.firstName,
  "last_name": this.SubadminForm.value.lastName,
  "image": this.subAdminPicId,
  "email":this.SubadminForm.value.email,
  "phone_no":this.SubadminForm.controls['phoneNo'].value?.number?this.SubadminForm.controls['phoneNo'].value?.number?.replace(/ /g,''):null,
  "country_code":this.SubadminForm.controls['phoneNo'].value?.dialCode?this.SubadminForm.controls['phoneNo'].value?.dialCode:null,
  "password": this.SubadminForm.value.password,
  "permissions": this.permissionArray
}
this.DataSubmitType(this.id,obj)
}
check(data)
{
  if(data.is_add_edit){
    data.is_view=true
  }
}
GetSubAdmin(){
  this.service.get(`sub-admin/get-all-subadmin-module/`).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get subAdmin data',res);
    this.SubAdminData = res?.data
    for(let x of res?.data){
      this.permissionArray.push({label:x?.name,
      "module":x?.id,
      "is_add_edit":false,
      "is_view":false
      })
    }
}
  })
}
Back(){
  window.history.back()
}
GetAdminById(){
  this.route.queryParams.subscribe((params)=>{
    this.id = params.id;
    if(this.id){
      this.service.get(`sub-admin/get-details-by-id/${params?.id}/`).subscribe((data:any)=>{
        if([200,201].includes(data.code)){
          this.setFormsValue(data?.data)
          this.profileUrl = data?.data?.image?.media_file_url
          this.subAdminPicId = data?.data?.image?.id
          let findIndex = allCountries.find(x=>{
         const phone = data?.data?.country_code?.split('+');
      return x[2] == phone[1].trim();
    })
    this.selectedCountry = (findIndex != undefined)?findIndex[1]:CountryISO.India;
        }
        })
    }
   })
}
setFormsValue(obj){
  this.permissionArray = []
  this.SubadminForm.controls['firstName'].setValue(obj?.first_name)
  this.SubadminForm.controls['lastName'].setValue(obj?.last_name)
  this.SubadminForm.controls['phoneNo'].setValue(obj?.phone_no?obj?.phone_no:null)
  this.SubadminForm.controls['email'].setValue(obj?.email?obj?.email:'')
 this.SubadminForm.controls['password'].setValue(obj?.password?obj?.password:'12345678')
 for(let x of obj?.permissions){
  this.permissionArray.push({label:x?.module?.name,
  "module":x?.module?.id,
  "is_add_edit":x?.is_add_edit,
  "is_view":x?.is_view
  })
}
}
 DataSubmitType(idRef,obj){
  if(idRef){ this.service.put(`sub-admin/update-details/${idRef}/`,obj).subscribe((res:any)=>{
    if ([200,201].includes(res.code)){
      this.toaster.success('Sub Admin updated','Success')
      window.history.back()
    }
  })}else{
    this.service.post(`sub-admin/create/`,obj).subscribe((res:any)=>{
      if ([200,201].includes(res.code)){
        this.toaster.success('Sub Admin created','Success')
        window.history.back()
      }
    })
  }
}
}
