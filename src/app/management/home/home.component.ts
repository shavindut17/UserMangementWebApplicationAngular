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
 public  headerText: any;
 public  headerDescription: any;



  constructor(private userService: UserService) {
    this.getUser();
  }
  ngOnInit() {
    this.navigationPage = 'landing';
    this.headerText = 'Faster Bakers';
    this.headerDescription = 'Faster bakers admin panel';
  }

  getUser() {
    this.userService.getCurrentUser().subscribe( res => {
      this.currentUser = res as User ;
    });
  }

  navigation(selection) {
      this.navigationPage = selection ;
      if (selection === 'create') {
          this.headerText = 'Item Creation';
          this.headerDescription =  'Please Create Items to show on the web site ';
      } else if (selection === 'all') {
        this.headerText = 'Created Items';
        this.headerDescription =  'Items currently showing';
      }
  }

}
