import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts ={
    autoplay:true
  }
  constructor(private router: Router) { }

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
