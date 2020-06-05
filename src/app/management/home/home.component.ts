import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public  currentUser: any;
 public  navigationPage: any;


  constructor(private userService: UserService) {
    this.getUser();
  }
  ngOnInit() {
    this.navigationPage = 'landing';
  }

  getUser() {
    this.userService.getCurrentUser().subscribe( res => {
      this.currentUser = res as User ;
    });
  }

  navigation(selection) {
      this.navigationPage = selection ;
  }

}
