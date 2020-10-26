import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts ={
    autoplay:true
  }

  data: any;
  userName: any;

  constructor(private activatedRoute: ActivatedRoute,private router: Router) { this.activatedRoute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.user;
      this.userName = Object.values(this.data);
    }
  });}

  ngOnInit() {
  }
  goteoria() {
   
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['teoria'], navigationExtras);
  }
}
