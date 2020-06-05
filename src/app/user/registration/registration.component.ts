import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;
  public profilePicture: string;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      password: ['', Validators.required],
      profilePicture: ['', Validators.required],
      agreed: []
    });

}


addUser() {
  this.form.markAsTouched();
  if (!this.form.value.agreed) {
   this.toastrService.warning('Please accept the conditions');
   return ;
  }

  if (this.form.invalid) {
   const user: User = {
     _id: -1,
     name: this.form.value.name,
     address : this.form.value.address,
     email: this.form.value.email,
     dateOfBirth: this.form.value.dateOfBirth,
     password: this.form.value.password,
     profilePicture: this.profilePicture,
   };
   this.userService.register(user).subscribe(res => {
     try {
      this.form.reset();
      this.toastrService.success('User registration Successfull');
      this.router.navigate(['']);
     } catch (err) {
      this.toastrService.error(err);
     }

   });
 }
}

uploadFinishTrigger($event){
this.profilePicture = $event;
}

back(){
  this.router.navigate(['']);
}


}
