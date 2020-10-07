import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-type-yourname',
  templateUrl: './type-yourname.page.html',
  styleUrls: ['./type-yourname.page.scss'],
})
export class TypeYournamePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
  myName: string = "hola";
  user = {
    name: ''
  }

gohome() {
  this.user.name = this.myName;  // Fetch from ionic-input 
  let navigationExtras: NavigationExtras = {
    state: {
      user: this.user, 
    }
  };
  this.router.navigate(['home'], navigationExtras);
}

}
