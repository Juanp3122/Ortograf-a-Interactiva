import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';

declare var particlesJS: any;

@Component({
  selector: 'app-type-yourname',
  templateUrl: './type-yourname.page.html',
  styleUrls: ['./type-yourname.page.scss'],
})
export class TypeYournamePage implements OnInit {

  public createSongForm: FormGroup;

  constructor(private router: Router,public toastController: ToastController,public menu: MenuController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder,) { 

      this.createSongForm = formBuilder.group({
        userName: ['', Validators.required],
        puntaje: ['',]
      });
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

  async createSong() {
    const loading = await this.loadingCtrl.create();
  
    const userName = this.createSongForm.value.userName;
    const puntaje = this.createSongForm.value.puntaje;
    

  
    this.firestoreService
      .createSong(userName,puntaje)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.router.navigateByUrl('home');
          });
        },
        error => {
          loading.dismiss().then(() => {
            console.error(error);
          });
        }
      );
  
    return await loading.present();
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
