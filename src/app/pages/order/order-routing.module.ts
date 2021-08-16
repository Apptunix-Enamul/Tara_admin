import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from 'src/app/pages/order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        component: OrderlistComponent,
        data: {
          title: 'Orders',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Pricing Page' }
          ]
        }
      },
      {
        path: 'orderdetail',
        component: OrderdetailComponent,
        data: {
          title: 'Order Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Order Detail' }
          ]
        }
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
