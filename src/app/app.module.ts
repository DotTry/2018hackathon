import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateProductTypeComponent } from './create-product-type/create-product-type.component';
import { UpdateProductStatusComponent } from './update-product-status/update-product-status.component';
import { UpdateProductRequestComponent } from './update-product-request/update-product-request.component';
import { TrackProductComponent } from './track-product/track-product.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ZoneComponent } from './zone/zone.component';
import { CreateProductRequestComponent } from './create-product-request/create-product-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductTypeComponent,
    UpdateProductStatusComponent,
    UpdateProductRequestComponent,
    TrackProductComponent,
    WarehouseComponent,
    ZoneComponent,
    CreateProductRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
