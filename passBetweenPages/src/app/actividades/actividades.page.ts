import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  palabra=['Despertar','Artista','Máximo','Guárdamelo'];
  respuestas=['Aguda','Grave','Esdrujula','Sobreesdrujula'];
  indice=0;
  respuesta; 
  puntaje=0;
  bloquear:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  
  siguiente(){
    this.indice+=1;
    this.respuesta=null;
    this.bloquear=false;
  }
  setAguda(){
   this.respuesta='Aguda';
   if(this.isCorrect())
   this.puntaje+=10;
  }
  setGrave(){
    this.respuesta='Grave';
    if(this.isCorrect())
   this.puntaje+=10;
  }
  setEsdrujula(){
    this.respuesta='Esdrujula';
    if(this.isCorrect())
   this.puntaje+=10;
  }
  setSobreesdrujula(){
    this.respuesta='Sobreesdrujula';
    if(this.isCorrect())
   this.puntaje+=10;
  }
  isCorrect(){
    if(this.respuesta==this.respuestas[this.indice]){
     this.bloquear=true;
      return true;
    }
    else{
      return false;
    }
  }
  

  }


