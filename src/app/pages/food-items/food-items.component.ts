import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/_services/common.service';
import {BodyObject} from 'src/app/_body/api-body'
import { environment } from 'src/environments/environment';
import { TooltipPosition } from '@angular/material/tooltip';
@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FoodItemsComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
VendorId= JSON.parse(sessionStorage.getItem(environment.storageKey)).id;
  CategoryName = new FormControl('')
 docfile: any=[];
  ProductForm:FormGroup
  toppings = new FormControl();
  CategoryData: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  Select = new FormControl();
  Selected: string[] = ['one', 'two', 'three'];
  dishType: string[] = ['Soya Chap', 'Burger','Sandwich'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  imgurl: string | ArrayBuffer;
  productImageId: any = [];
  fileName: any
  SearchValue:any = ''
  timer: number;
  page:number = 1
  PageSize:number = 10
  count:number = 0
  ProductItems: any;
  SubCategoryData:  string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser'];
  catId: any;
  DuplicateFilesDetectors: any=[];
  productId: any;
  VendorList: any;

  constructor(private modalService: NgbModal,private service:CommonService,private toaster:ToastrService,private fb:FormBuilder) { 
    this.ProductForm  = this.fb.group({
      FoodName:['',[Validators.required,Validators.maxLength(30)]],
      // FoodId:['',[Validators.required,Validators.maxLength(15)]],
      // collection:['',[Validators.required,Validators.maxLength(30)]],
      cost:['',[Validators.required,Validators.maxLength(15)]],
      limit:['',[Validators.required,Validators.maxLength(15)]],
      brand:['',[Validators.required,Validators.maxLength(15)]],
      qty:['',[Validators.required,Validators.maxLength(15)]],
      price:['',[Validators.required,Validators.maxLength(10)]],
      discount:['',[Validators.required,Validators.maxLength(10)]],
      vendor:['',[Validators.required]],
      description:['',[Validators.required,Validators.maxLength(350)]],
      Warranty:['',[Validators.required,Validators.maxLength(300)]],
      material:['',[Validators.required,Validators.maxLength(300)]],
      product_sub_category:['',Validators.required],
      product_category:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.GetProduct()
    this.GetCategory()
    this.GetVendor()
  }

  Filter(event: any) {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      let filterValue = (event.target as HTMLInputElement).value;
      this.SearchValue=filterValue;
      this.GetProduct()
    }, 1000)
  }
  GetSubCategory(id){
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
      "start": 0,
      "length": 10,
      "search": {
          "value": "",
          "regex": false
      }
  }
    this.service.post(`product/get-product-sub-category-with-pagination/${id}/`,obj).subscribe((res:any)=>{
    if([200,201].includes(res?.code)){
      console.log('Get sub cat called',res);
    
      if (res.data.length){
        this.SubCategoryData = res.data
      }
      else{
        this.SubCategoryData = []
        this.ProductForm.controls['product_sub_category'].disable()
      }
      
  }
    })
  }
  onPaginateChange(e): PageEvent {
    if (e.pageIndex == 0) {
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
      "start": 0,
      "length": 10,
      "search": {
          "value": "",
          "regex": false
      }
  }
    this.service.post(`product/get-product-category-with-pagination/`,obj).subscribe((res:any)=>{
    if([200,201].includes(res.code)){
      this.CategoryData = res.data
  }
    })
  }
 GetProductById(id){
  this.service.get(`product/get-product-by-id/${id}/`).subscribe((res:any)=>{
    console.log('ProductId get',res);
    if([200,201].includes(res?.code)){
      this.GetSubCategory(res?.data?.product_category?.id)
   this.SetValuesInForm(res?.data)
  }
  })
 }
 SetValuesInForm(obj){
   this.ProductForm.controls['FoodName'].setValue(obj?.item_name)
   this.ProductForm.controls['cost'].setValue(obj?.product_cost)
   this.ProductForm.controls['description'].setValue(obj?.description)
   this.ProductForm.controls['limit'].setValue(obj?.purchase_limit)
   this.ProductForm.controls['brand'].setValue(obj?.brand)
   this.ProductForm.controls['qty'].setValue(obj?.quantity)
   this.ProductForm.controls['price'].setValue(obj?.selling_price)
   this.ProductForm.controls['discount'].setValue(obj?.discount)
   this.ProductForm.controls['Warranty'].setValue(obj?.warranty)
   this.ProductForm.controls['material'].setValue(obj?.product_material)
   this.ProductForm.controls['vendor'].setValue(obj?.vendor)
   this.ProductForm.controls['product_sub_category'].setValue(obj?.product_sub_category?.id)
   this.ProductForm.controls['product_category'].setValue(obj?.product_category?.id)
for(let x of obj.product_images){
  this.productImageId.push({"image": x?.image?.id})
  this.docfile.push(x?.image?.media_file_url)
}
 }
 GetProduct(){
   let obj ={
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
        "value": this.SearchValue,
        "regex": false
    }
}
this.service.post(`product/product-list-pagination/`,obj).subscribe((res:any)=>{
  console.log('Product get',res);
  if([200,201].includes(res?.code)){
  this.ProductItems = res.data
  this.count = res?.recordsTotal
  console.log('Total',this.count);
 }else{
  this.ProductItems = []
  this.count = 0
}
})
 } 
  deleteBoxModal(userDelete,id) {
    this.productId = id
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
DeleteProduct(){
  this.service.deleteApi(`product/delete-by-id/${this.productId}/`).subscribe((res:any)=>{
    if ([200,201].includes(res.code)) {
      this.GetProduct()
      this.toaster.success('Product deleted successfully','Product delete')
      this.modalService.dismissAll()
    }
  })
}
  addUserModal(addUser) {
    this.DuplicateFilesDetectors=[]
    this.docfile =[]
    this.productImageId =[]
    this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editBoxModal(editModel,id) {
    this.productImageId=[]
    this.docfile = []
    this.productId = id
    this.GetProductById(id)
    this.modalService.open(editModel, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addsubCategoryModel(addsubCategory) {
    this.modalService.open(addsubCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addCategoryModel(addCategory) {
    this.ProductForm.reset()
    this.productImageId=[]
    this.docfile = []
    this.modalService.open(addCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  
  Remove(index){
    this.docfile.splice(index,1);
  }
  
  sendFile(fileData) {
    this.toaster.clear()
    if(this.docfile.length < 5){
      let formdata = new FormData()
		formdata.append('media', fileData);
		this.service.postApi(`upload/media/`,formdata).subscribe((res: any) => {
      if ([200,201].includes(res.code)) {
		    // this.productImageId = res.data[0].id
        this.docfile.push(res.data[0].media_file_url)
        this.productImageId.push({"image": res.data[0].id})
        this.toaster.success('File uploaded','File')
      }
		});
    }else{
      this.toaster.error('Maximum five files can be uploaded')
    }
  }
  uploadFile(event) {
    this.toaster.clear()
    if(this.DuplicateFilesDetectors.includes(event.target.files[0].name)){
      this.toaster.error('This file has already been taken','Duplicate file error')
    }else{
      if (event.target.files && event.target.files[0]) {
        var type = event.target.files[0].type;
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
          let fileData = event.target.files[0];
           this.fileName = event.target.files[0].name;
           this.DuplicateFilesDetectors.push(this.fileName)
          this.sendFile(fileData)
        }else{
          this.toaster.error('File format not supported','File error')
        }
      }
    }
	}
  AddProduct(ref){
    if(this.ProductForm.valid){
if(this.productImageId.length > 0){
  (ref=='add')?this.AddFunctionForProduct():this.UpdateProduct()
  // this.AddFunctionForProduct()
    }else { this.toaster.error('Please upload product images','Error') }
}else{
  this.ProductForm.markAllAsTouched()
}
  }
  AddFunctionForProduct() {
   this.toaster.clear()
     let obj ={
        // "id": Number(this.ProductForm.value.FoodId),
        "item_name": this.ProductForm.value.FoodName,
        "product_images": this.productImageId,
        "product_category": this.ProductForm.value.product_category,
        "product_sub_category": this.ProductForm.value.product_sub_category,
        "product_cost":this.ProductForm.value.cost,
        "purchase_limit":this.ProductForm.value.limit,
        "brand": this.ProductForm.value.brand,
        "quantity": this.ProductForm.value.qty,
        "selling_price": this.ProductForm.value.price,
        "discount": this.ProductForm.value.discount+'%',
        "warranty": this.ProductForm.value.Warranty,
        "product_material": this.ProductForm.value.material,
        "vendor":this.ProductForm.value.vendor,
        "description":this.ProductForm.value.description
    }
        this.service.post(`product/create-product/`, obj).subscribe((res:any) => {
          if([200,201].includes(res?.code)){
        this.GetProduct()
         this.toaster.success("Product added successfully.", "Success!");
         this.modalService.dismissAll();
         this.ProductForm.reset()
         this.DuplicateFilesDetectors=[]
         this.docfile
         this.productImageId = []
          }
      })
   }

   UpdateProduct() {
    this.toaster.clear()
      let obj ={
         // "id": Number(this.ProductForm.value.FoodId),
         "item_name": this.ProductForm.value.FoodName,
         "product_images": this.productImageId,
         "product_category": this.ProductForm.value.product_category,
         "product_sub_category": this.ProductForm.value.product_sub_category,
         "product_cost":this.ProductForm.value.cost,
         "purchase_limit":this.ProductForm.value.limit,
         "brand": this.ProductForm.value.brand,
         "quantity": this.ProductForm.value.qty,
         "selling_price": this.ProductForm.value.price,
         "discount": this.ProductForm.value.discount+'%',
         "warranty": this.ProductForm.value.Warranty,
         "product_material": this.ProductForm.value.material,
         "vendor":this.ProductForm.value.vendor,
         "description":this.ProductForm.value.description
     }
         this.service.put(`product/update-product/${this.productId}/`, obj).subscribe((res:any) => {
           if([200,201].includes(res?.code)){
         this.GetProduct()
          this.toaster.success("Product updated successfully.", "Success!");
          this.modalService.dismissAll();
          this.ProductForm.reset()
          this.DuplicateFilesDetectors=[]
          this.docfile
          this.productImageId = []
           }
       })
    }
    FilterByCategory(id){
      
    }
    GetVendor(){
     this.service.post(`vendor/vendor-list-pagination/`,BodyObject.getVendor).subscribe((res:any)=>{
      if([200,201].includes(res.code)){
         this.VendorList = res.data
        this.count = res?.recordsTotal
    }
      })
    }
}
