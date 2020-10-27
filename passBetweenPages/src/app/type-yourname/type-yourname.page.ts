import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

declare var particlesJS: any;

@Component({
  selector: 'app-type-yourname',
  templateUrl: './type-yourname.page.html',
  styleUrls: ['./type-yourname.page.scss'],
})
export class TypeYournamePage implements OnInit {

  constructor(private router: Router,public toastController: ToastController,public menu: MenuController) { 
    this.menu.swipeGesture(false);
  }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
  myName: string = "";



  user = {
    name: ''
  }
  



  async gohome(){
    // Fetch from ionic-input 
  if(this.myName === ""){
    const toast = await this.toastController.create({
      message: 'Error: Debes de ingresar un usuario!',
      duration: 2000
    });
    toast.present();
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user, 
      }
    };
    this.router.navigate(['type-yourname'], navigationExtras);

    
  }else{
    this.user.name = this.myName;
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user, 
      }
    };
    this.router.navigate(['home'], navigationExtras);
  }

}


}
