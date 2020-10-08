import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-acento',
  templateUrl: './tipo-acento.page.html',
  styleUrls: ['./tipo-acento.page.scss'],
})
export class TipoAcentoPage implements OnInit {
  categories = [' Acento','como','hptas','les','va'];
  constructor() { }

  ngOnInit() {
  }

}
