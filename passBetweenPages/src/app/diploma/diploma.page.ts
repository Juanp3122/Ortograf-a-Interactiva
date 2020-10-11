import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.page.html',
  styleUrls: ['./diploma.page.scss'],
})
export class DiplomaPage implements OnInit {
  employee = { fname: 'Happy', lname: 'Singh', city: 'Punjab' };
  showCity = false;
  constructor() { }

  ngOnInit() {
  }
  moreInfo() {
    this.showCity = false;
  }

}
