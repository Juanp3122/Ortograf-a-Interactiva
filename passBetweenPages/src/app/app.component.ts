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
    this.initializeApp();
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        this.userName = Object.values(this.data);
      }
    });
  }
  ngOnInit() {

  }
  myName: string = "";
  user = {
    name: ''
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
  goteoria() {
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: { 
        user: this.user,
       }
    };
    this.router.navigate(['teoria'], navigationExtras);
  }
  gohome() {
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: { 
        user: this.user,
        }
    };
    this.router.navigate(['home'], navigationExtras);
  }
  goActividades() {
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: { 
        user: this.user,
        }
    };
    this.router.navigate(['actividades'], navigationExtras);
  }
  goPuntaje() {
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: {  
        user: this.user,
       }
    };
    this.router.navigate(['puntaje'], navigationExtras);
  }
  goActualizaciones() {
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: {  
        user: this.user,
       }
    };
    this.router.navigate(['actualizaciones'], navigationExtras);
  }
  goDiploma() {
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: {  
        user: this.user,
       }
    };
    this.router.navigate(['diploma'], navigationExtras);
  }
  goAjustes() {
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: {  
        user: this.user,
       }
    };
    this.router.navigate(['ajustes'], navigationExtras);
  }
}