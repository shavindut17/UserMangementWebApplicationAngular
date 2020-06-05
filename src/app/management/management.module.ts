import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { AllItemsComponent } from './all-items/all-items.component';

@NgModule({
  declarations: [HomeComponent, LandingComponent, CreateItemComponent, AllItemsComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
