import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ManagementModule } from '../management/management.module';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ManagementModule
  ]
})
export class UserModule { }
