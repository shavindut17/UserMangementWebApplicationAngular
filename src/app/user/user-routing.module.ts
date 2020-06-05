import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from '../management/home/home.component';


const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
