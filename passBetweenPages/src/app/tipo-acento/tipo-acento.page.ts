import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tipo-acento',
  templateUrl: './tipo-acento.page.html',
  styleUrls: ['./tipo-acento.page.scss'],
})
export class TipoAcentoPage implements OnInit {
  categories = [' Acento','Fonemas','Signos de puntuacion','Silabas','Mayusculas'];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCategoryChange(category){

    if(category.detail.value==' Acento'){
      
      let navigationExtras: NavigationExtras = {
        state: { 
          
         }
      };
      this.router.navigate(['tipo-acento'], navigationExtras);
      
    }else if(category.detail.value=='Fonemas') {
      let navigationExtras: NavigationExtras = {
        state: { 
          
         }
      };
      this.router.navigate(['fonemas'], navigationExtras);
    }else if(category.detail.value=='Signos de puntuacion') {
      let navigationExtras: NavigationExtras = {
        state: { 
          
         }
      };
      this.router.navigate(['signos-puntuacion'], navigationExtras);
    }else if(category.detail.value=='Silabas') {
      let navigationExtras: NavigationExtras = {
        state: { 
          
         }
      };
      this.router.navigate(['silaba'], navigationExtras);
    }else if(category.detail.value=='Mayusculas') {
      let navigationExtras: NavigationExtras = {
        state: { 
          
         }
      };
      this.router.navigate(['mayusculas'], navigationExtras);
    }
    }
}
