import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  userName: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private activatedRoute: ActivatedRoute,private router: Router
  ) {

    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        this.userName = Object.values(this.data);
      }
    });
    this.initializeApp();
    
  }
  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
  goteoria() {
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['teoria'], navigationExtras);
  }
  gohome() {
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['home'], navigationExtras);
  }
  goActividades() {
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['actividades'], navigationExtras);
  }
  goPuntaje() {
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['puntaje'], navigationExtras);
  }
  goActualizaciones() {
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['actualizaciones'], navigationExtras);
  }
  goDiploma() {
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['diploma'], navigationExtras);
  }
  goAjustes() {
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['ajustes'], navigationExtras);
  }
}