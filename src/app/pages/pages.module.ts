import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutes } from './pages.routing';
// import { HelperclassesComponent } from './helper-classes/hc.component';
// import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
// import { PricingComponent } from './pricing/pricing.component';
// import { UserComponent } from './user/user.component';
// import { UsersComponent } from './user/users/users.component';
// import { CalculatorComponent } from './calculator/calculator.component';
import { RevenueManagementComponent } from './revenue-management/revenue-management.component';
import { ReviewsComponent } from './reviews/reviews.component';
// import { AnalyticsComponent } from './analytics/analytics.component';
import { CmsComponent } from './pages/cms/cms.component';
import { AboutComponent } from './about/about.component';
import { QuillModule } from 'ngx-quill';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NotificationComponent } from './notification/notification.component';
// import { VendorsComponent } from './vendors/vendors.component';
// import { EventsComponent } from './events/events.component';
// import { RewardsComponent } from './rewards/rewards.component';
// import { VendordetailComponent } from './vendordetail/vendordetail.component';
// import { UserhistoryComponent } from './user/userhistory/userhistory.component';
// import { PromocodeComponent } from './promocode/promocode.component';
// import { VendorhistoryComponent } from './vendorhistory/vendorhistory.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
// import { UsersDetailComponent } from './user/users-detail/users-detail.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
// import { InventoryComponent } from './inventory/inventory.component';
// import { OrderlistComponent } from './orderlist/orderlist.component';
// import { BannerComponent } from './banner/banner.component';
import { PrivacyComponent } from './privacy-policy/privacy.component';
import { AdminComponent } from './admin/admin.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import {MatSelectModule} from '@angular/material/select';
// import { DriverComponent } from './driver/driver.component';
// import { DriverdetailComponent } from './driverdetail/driverdetail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// import {OrderdetailComponent} from './order/orderdetail/orderdetail.component';
import {AdminformComponent} from './adminform/adminform.component';
import { NotificationhistoryComponent } from './notificationhistory/notificationhistory.component';
import { VendorRequestComponent } from './vendor/vendor-request/vendor-request.component';
// import { DriverRequestComponent } from './driver-request/driver-request.component';
import { ShopsrequestComponent } from './shopsrequest/shopsrequest.component';
import { ShopComponent } from './shop/shop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
// import { UsereditComponent } from './user/useredit/useredit.component';
// import { AddvendorComponent } from './addvendor/addvendor.component';
// import { EditvendorComponent } from './editvendor/editvendor.component';
// import { AdddriverComponent } from './adddriver/adddriver.component';
// import { EditdriverComponent } from './drivermodule/editdriver/editdriver.component';
// import { TimeslotComponent } from './timeslot/timeslot.component';
// import { AddtimeslotComponent } from './addtimeslot/addtimeslot.component';
// import { EdittimeslotComponent } from './edittimeslot/edittimeslot.component';
import { MatNativeDateModule } from '@angular/material/core';
// import { FranchiseComponent } from './franchise/franchise.component';
// import { FranchiseseditComponent } from './franchisesedit/franchisesedit.component';
// import { FranchiseaddComponent } from './franchiseadd/franchiseadd.component';
// import { FranchisedetailComponent } from './franchisedetail/franchisedetail.component';
// import { FranchiserequestComponent } from './franchiserequest/franchiserequest.component';
// import { CouponRequestComponent } from './coupon-request/coupon-request.component';
import { SupportComponent } from './support/support.component';
import { MembershipComponent } from './membership/membership.component';
import { SOSComponent } from './sos/sos.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input'
import { MatTooltipModule } from '@angular/material/tooltip';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CKEditorModule } from 'ckeditor4-angular';
@NgModule({
  imports: [
CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    NgbModule,
    QuillModule.forRoot(),
    ChartsModule,
    ChartistModule,
    NgxChartsModule,
    NgxDatatableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatNativeDateModule,
    GooglePlaceModule,
    AgmCoreModule,
    NgxIntlTelInputModule,
    MatTooltipModule,
    // CKEditorModule,
    CKEditorModule
  ],
  declarations: [
    // HelperclassesComponent,
    // InvoiceComponent,
    ProfileComponent,
    // UserComponent,
    // UsersComponent,
    // BikesComponent,
    // ToursComponent,
    // DestinationComponent,
    // HotelsComponent,
    // CalculatorComponent,
    RevenueManagementComponent,
    ReviewsComponent,
    // AnalyticsComponent,
    CmsComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    NotificationComponent,
    // VendorsComponent,
    // EventsComponent,
    // RewardsComponent,
    // VendordetailComponent,
    // UserhistoryComponent,
    // UsersDetailComponent,
    // PromocodeComponent,
    // VendorhistoryComponent,
    FoodCategoriesComponent,
    // InventoryComponent,
    // OrderlistComponent,
    // BannerComponent,
    PrivacyComponent,
    AdminComponent,
    FoodItemsComponent,
    // DriverComponent,
    // DriverdetailComponent,
    // OrderdetailComponent,
    AdminformComponent,
    NotificationhistoryComponent,
    VendorRequestComponent,
    // DriverRequestComponent,
    ShopsrequestComponent,
    ShopComponent,
    // UsereditComponent,
    // AddvendorComponent,
    // EditvendorComponent,
    // AdddriverComponent,
    // EditdriverComponent,
    // TimeslotComponent,
    // AddtimeslotComponent,
    // EdittimeslotComponent,
    // FranchiseComponent,
    // FranchiseseditComponent,
    // FranchiseaddComponent,
    // FranchisedetailComponent,
    // FranchiserequestComponent,
    // CouponRequestComponent,
    SupportComponent,
    MembershipComponent,
    SOSComponent,
  ]
})
export class PagesModule {}
