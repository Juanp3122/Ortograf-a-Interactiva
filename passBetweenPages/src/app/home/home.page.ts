import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  userName: any;

  constructor(private activatedRoute: ActivatedRoute,private router: Router) 
  {   
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        this.userName = Object.values(this.data);
      }
    });
  }
  goback() {
   
    let navigationExtras: NavigationExtras = {
      state: {   }
    };
    this.router.navigate(['teoria'], navigationExtras);
  }
  goActividades() {
   
    let navigationExtras: NavigationExtras = {
      state: {   }
    };
    this.router.navigate(['actividades'], navigationExtras);
  }
  goPuntaje() {
   
    let navigationExtras: NavigationExtras = {
      state: {   }
    };
    this.router.navigate(['puntaje'], navigationExtras);
  }
  goActualizaciones() {
   
    let navigationExtras: NavigationExtras = {
      state: {   }
    };
    this.router.navigate(['actualizaciones'], navigationExtras);
  }
  goDiploma() {
   
    let navigationExtras: NavigationExtras = {
      state: {   }
    };
    this.router.navigate(['diploma'], navigationExtras);
  }
  goAjustes() {
   
    let navigationExtras: NavigationExtras = {
      state: {   }
    };
    this.router.navigate(['ajustes'], navigationExtras);
  }
}
