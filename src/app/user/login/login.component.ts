import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.createForm();
  }

  register() {
    this.router.navigate(['/register']);
  }


  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const user  = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.userService.login(user).subscribe(res => {
      window.localStorage.setItem('currentUser', res);
      this.form.reset();
      this.toastrService.success('User logged Successfull');
      this.router.navigate(['profile']);
    });

  }

}
