import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.page.html',
  styleUrls: ['./teoria.page.scss'],
})
export class TeoriaPage implements OnInit {

  constructor(private router: Router) { }
  categories = [' Acento','como','hptas','les','va'];
  ngOnInit() {
  }
  onCategoryChange(category){

  if(category.detail.value==' Acento'){
    console.log("fsotasdasdsadsadsaaa");
    let navigationExtras: NavigationExtras = {
      state: { 
        
       }
    };
    this.router.navigate(['tipo-acento'], navigationExtras);
    
  }else{
    console.log("fsotaaa");
  }
  }
  

}

