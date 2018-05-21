import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductTypeComponent } from './create-product-type/create-product-type.component';
import { CreateProductRequestComponent } from './create-product-request/create-product-request.component';
import { HomeComponent } from './home/home.component';
import { TrackProductComponent } from './track-product/track-product.component';
import { UpdateProductRequestComponent } from './update-product-request/update-product-request.component';
import { UpdateProductStatusComponent } from './update-product-status/update-product-status.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ZoneComponent } from './zone/zone.component';


const routes: Routes=[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-product-type',
    component: CreateProductTypeComponent
  },
  {
    path: 'create-product-request',
    component: CreateProductRequestComponent
  },
  {
    path: 'track-product/:id',
    component: TrackProductComponent
  },
  {
    path: 'update-product-request/:id',
    component: UpdateProductRequestComponent
  },
  {
    path: 'update-product-status/:id',
    component: UpdateProductStatusComponent
  },
  {
    path: 'warehouse',
    component: WarehouseComponent
  },
  {
    path: 'zone/:id',
    component: ZoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
