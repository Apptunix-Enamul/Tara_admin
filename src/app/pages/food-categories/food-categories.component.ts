import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,} from '@angular/cdk/drag-drop';
import { CommonService } from 'src/app/_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { TooltipPosition } from '@angular/material/tooltip';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FoodCategoriesComponent implements OnInit {
  panelOpenState = false;
  closeResult: string;
  SearchValue:any = ''
  page:number = 1
  PageSize:number = 10
  count:number = 0
  subCatpage = 1
  subCatPageSize = 10
  subCatCount = 0
  SubCatId:any
  CategoryForm:FormGroup
  SubcategoryForm:FormGroup
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
 
  ];
  horizontalOrientation = [
    {'name':'Thali', 'tax':'6%', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    {'name':'Fast Food','tax':'6%', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    // {'name':'kaali', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    // {'name':'manali', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
  ];
  
  listfooditems = [
    {'name':'Soya Chap'},
    {'name':'Burger'},
   
  ];
  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  dishType: string[] = ['Veg', 'Non-Veg'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  active = 1;
  imageId: any;
  ImageUrl: any;
  productLabels:FormArray
  catId: any;
  IsUpdate:any
  CategoryData: any;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  SubCategoryData: any;
  message: string;
  REFERENCE: any;
  MainCatId: any;
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;
  constructor(private modalService: NgbModal,private fb:FormBuilder,private service:CommonService,private toaster:ToastrService) {
    this.permissions = JSON.parse(
      sessionStorage.getItem(environment.storageKey)
    ).permissions;
    if (this.permissions.length==0 || this.permissions == null ||this.permissions == undefined) {
      this.editPermission = true;
      this.viewPermission = true;
    } else {
      this.editPermission = this.permissions[5].is_add_edit;
      this.viewPermission = this.permissions[5].is_view;
    }
    this.CategoryForm = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(30)]],
      description:['',Validators.required],
      tax_percentage:['',[Validators.required]]
    })
  }
  ngOnInit() {
    this.GetCategory()
    this.buildForm();
  
  }
  GetSubCategory(id){
    this.MainCatId = id
    this.SubCategoryData = []
    this.catId = id
    let obj = {
      "draw": 2,
      "columns": [
          {
              "data": "first_name",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "last_name",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "phone_number",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "email",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "id",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          }
      ],
      "order": [
          {
              "column": 3,
              "dir": "undefined"        }
      ],
      "start": this.subCatpage,
      "length": this.subCatPageSize,
      "search": {
          "value": "",
          "regex": false
      }
  }
    this.service.post(`product/get-product-sub-category-with-pagination/${id}/`,obj).subscribe((res:any)=>{
    if([200,201].includes(res?.code)){
      console.log('Get sub cat called',res);
       this.subCatCount = res?.recordsTotal
      // this.IsnotEmpty = res.data
      this.SubCategoryData = res.data
  }
    })
  }
  onPaginateChange(e,ref): PageEvent {
    if(ref=='cat'){if (e.pageIndex == 0) {
      this.page = e.pageIndex;
    } else {
      if (e.previousPageIndex < e.pageIndex) {
        this.page =this.page+ e.pageSize;
      } else {
        this.page =this.page-e.pageSize;
      }
    }
    this.PageSize = e.pageSize
    this.GetCategory();
    return e;
  }else{
    if (e.pageIndex == 0) {
      this.subCatpage = e.pageIndex;
    } else {
      if (e.previousPageIndex < e.pageIndex) {
        this.subCatpage =this.subCatpage+ e.pageSize;
      } else {
        this.subCatpage =this.subCatpage-e.pageSize;
      }
    }
    this.subCatPageSize = e.pageSize
    this.GetSubCategory(this.catId);
    return e;
  }
}
  GetCategory(){
    
    let obj = {
      "draw": 2,
      "columns": [
          {
              "data": "first_name",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "last_name",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "phone_number",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "email",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          },
          {
              "data": "id",
              "name": "",
              "searchable": true,
              "orderable": true,
              "search": {
                  "value": "",
                  "regex": false
              }
          }
      ],
      "order": [
          {
              "column": 3,
              "dir": "undefined"        }
      ],
      "start": this.page,
      "length": this.PageSize,
      "search": {
          "value": "",
          "regex": false
      }
  }
    this.service.post(`product/get-product-category-with-pagination/`,obj).subscribe((res:any)=>{
    if([200,201].includes(res.code)){
      console.log('Get cat called',res);
      this.count = res?.recordsTotal
      // this.IsnotEmpty = res.data
      this.CategoryData = res.data
  }
    })
  }
  buildForm() {
    this.SubcategoryForm = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(30)]],
      specification: this.fb.array([], [Validators.required]),
    })
  }
 
  

addUser() {
  this.specification().push(this.newSpecifiaction())
    
  }
  removeUser(i: number) {
    this.specification().removeAt(i);
  }
  newSpecifiaction(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
    })
  }
  specification(): FormArray {
    return this.SubcategoryForm.get('specification') as FormArray;
  }
  
  deleteBoxModal(userDelete,id,ref) {
    this.REFERENCE = ref
    this.catId = id
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }

  addUserModal(addUser) {
    this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editBoxModal(editModel,obj) {
    this.SubcategoryForm.reset()
    this.ImageUrl =undefined
    this.setSubCategoryForm(obj)
    console.log('OBJ',obj);
    this.ImageUrl = obj?.sub_category_image?.media_file_url
    this.imageId = obj?.sub_category_image?.id
    this.catId = obj?.category
    this.SubCatId = obj?.id
    this.modalService.open(editModel, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addsubCategoryModel(addsubCategory) {
    this.SubcategoryForm.reset()
    this.ImageUrl =undefined
    this.modalService.open(addsubCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addCategoryModel(addCategory,obj) {
    this.IsUpdate = obj
    if(obj==''){
      this.ImageUrl = undefined
      this.imageId = undefined
      this.CategoryForm.reset()
    }else{
      this.ImageUrl = obj?.category_image?.media_file_url
      this.imageId = obj?.category_image?.id
      this.CategoryForm.patchValue(obj)
      this.catId = obj?.id
    }
    this.modalService.open(addCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  sendFile(fileData) {
    let formdata = new FormData()
    formdata.append('media', fileData);
    this.service.postApi(`upload/media/`,formdata).subscribe((res: any) => {
      console.log("Imager api called",res);
      if ([200,201].includes(res.code)) {
        this.toaster.success('File uploaded successfully','File')
          this.imageId = res.data[0].id
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
            this.ImageUrl =fileData.name
        }
      }else{
        this.toaster.error('File format not supported','File Error')
      }
    }
  }
  SaveCategory(ref){
    this.toaster.clear()
    if(ref=='cat'){
      if(this.CategoryForm.valid){
        (this.ImageUrl)? this.DataSubmission(ref):this.toaster.error('Please upload category image')
      }else{this.CategoryForm.markAllAsTouched()
      }
    }
    else if('sub'){
   if(this.SubcategoryForm.valid){
   (this.ImageUrl)? this.DataSubmission(ref):this.toaster.error('Please upload sub category image')
  }else{
  this.SubcategoryForm.markAllAsTouched()
}
    }else if('subUpdate'){
      if(this.SubcategoryForm.valid){
        (this.ImageUrl)? this.DataSubmission(ref):this.toaster.error('Please upload sub category image')
       }else{
       this.SubcategoryForm.markAllAsTouched()
     }
    }
  }
  DataSubmission(FOR){
 if(FOR=='cat'){
      let OperationalApi = (this.IsUpdate=='')?`product/create-category/`:`product/update-category/${this.catId}/`
      let obj ={
        "name":this.CategoryForm.value.name,
        "category_image":this.imageId,
        "description":this.CategoryForm.value.description,
        "tax_percentage":this.CategoryForm.value.tax_percentage
    }
        this.CallCreateUpdateApi(OperationalApi,obj)
  }
    else if(FOR=='sub'){
      let obj ={
      "name":this.SubcategoryForm.value.name,
      "sub_category_image":this.imageId,
      "category":this.catId,
      "sub_category_option":this.SubcategoryForm.get('specification').value
    }
      this.service.post(`product/create-sub-category/`,obj).subscribe((res:any)=>{
        if ([200,201].includes(res.code)){
          this.toaster.success('New sub category added','Success')
          this.GetSubCategory(this.catId)
          this.modalService.dismissAll()
          this.imageId = undefined
          this.ImageUrl=undefined
        }
      })
    }
    else if(FOR=='subUpdate'){
      let obj ={
        "id":this.SubCatId,
      "name":this.SubcategoryForm.value.name,
      "sub_category_image":this.imageId,
      "category":this.catId,
      "sub_category_option":this.SubcategoryForm.get('specification').value
    }
      this.service.put(`product/update-sub-category/${this.SubCatId}/`,obj).subscribe((res:any)=>{
        if ([200,201].includes(res.code)){
          this.toaster.success('Sub category updated','Success')
          this.GetSubCategory(this.catId)
          this.modalService.dismissAll()
          this.imageId = undefined
          this.ImageUrl=undefined
        }
      })
    }
}
DeleteVendor(){
  let obj = {
    "is_force":false
}
  if(this.REFERENCE=='cat'){
    this.service.put(`product/delete-product-category/${this.catId}/`,obj).subscribe((res:any)=>{
      if([200,201].includes(res.code)){
        this.GetCategory()
        this.modalService.dismissAll()
        this.toaster.success('Category deleted successfully','Deleted')
      }
    })
  }else{this.service.put(`product/delete-product-sub-category/${this.catId}/`,obj).subscribe((res:any)=>{
    if([200,201].includes(res.code)){
      this.GetSubCategory(this.MainCatId)
      this.modalService.dismissAll()
      this.toaster.success('Sub category deleted successfully','Deleted')
    }
  })}
  }
  setSubCategoryForm(data){
    this.SubcategoryForm.controls['name'].setValue(data?.name)
    const formArray = new FormArray([]);
    for (let x of data?.sub_category_option) {
      console.log(x)
      formArray.push(this.fb.group({
        name: [x.name,[Validators.required]],
      }));
    }
    this.SubcategoryForm.setControl('specification',formArray)
  }

  CallCreateUpdateApi(Api,obj){
    if(this.IsUpdate==''){
      this.service.post(Api,obj).subscribe((res:any)=>{
        if ([200,201].includes(res.code)){
          this.GetCategory()
          this.toaster.success(`New category created`,'Success')
          this.modalService.dismissAll()
          this.imageId = undefined
          this.ImageUrl=undefined
        }
      })
    }else{this.service.put(Api,obj).subscribe((res:any)=>{
      if ([200,201].includes(res.code)){
        this.GetCategory()
        this.toaster.success(`Category updated successfully`,'Success')
        this.modalService.dismissAll()
        this.imageId = undefined
        this.ImageUrl=undefined
      }
    })}
  }
}

