import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-type-yourname',
  templateUrl: './type-yourname.page.html',
  styleUrls: ['./type-yourname.page.scss'],
})
export class TypeYournamePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  myName: string = "";
  user = {
    name: ''
  }

goback() {
  this.user.name = this.myName;  // Fetch from ionic-input 
  let navigationExtras: NavigationExtras = {
    state: {
      user: this.user, 
    }
  };
  this.router.navigate(['home'], navigationExtras);
}

}
