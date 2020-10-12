import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  palabra = ['Despertar', 'Artista', 'Máximo', 'Guárdamelo'];
  respuestas = ['Aguda', 'Grave', 'Esdrujula', 'Sobreesdrujula'];
  indice = 0;
  respuesta;
  puntaje = 0;
 
  bloquear: boolean = false;
  stylesUnanswered = {
    'color': 'white',
  };
  stylesCorrect = {
    'color': 'green',
  };
  stylesIncorrect = {
    'color': 'red',
  };
  styleAguda;
  styleGrave;
  styleEsdrujula;
  styleSobreesdrujula;
  retroalimentaciones=[
    'tiene el acento en la última silaba!',
    'tiene el acento en la penúltima silaba!',
    'tiene el acento en la antepenúltima silaba!',
    'tiene el acento en la silaba anterior de la antepenúltima!'
  ]
  correct=0;

  constructor() { }

  ngOnInit() {
  }

  siguiente() {
  
    this.indice += 1;
    this.respuesta = null;
    this.bloquear = false;
    this.styleAguda = this.stylesUnanswered;
    this.styleGrave = this.stylesUnanswered;
    this.styleEsdrujula = this.stylesUnanswered;
    this.styleSobreesdrujula = this.stylesUnanswered;
    this.correct=0;
  }
  setAguda() {
    
    this.bloquear=true;
    this.respuesta = 'Aguda';
    this.isCorrect();
    if (this.correct==1) {
      this.puntaje += 10;
      this.styleAguda = this.stylesCorrect;

    } else if(this.correct==2) {
      this.styleAguda = this.stylesIncorrect;
    }

  }
  setGrave() {
    
    this.bloquear=true;
    this.respuesta = 'Grave';
    this.isCorrect();
    if (this.correct==1) {
      this.puntaje += 10;
      this.styleGrave = this.stylesCorrect;
    } else if(this.correct==2) {
      this.styleGrave = this.stylesIncorrect;
    }
  }
  setEsdrujula() {
    this.bloquear=true;
    this.respuesta = 'Esdrujula';
    this.isCorrect();
    if (this.correct==1) {
      this.puntaje += 10;
      this.styleEsdrujula = this.stylesCorrect;
    }
    else if(this.correct==2) {
      this.styleEsdrujula = this.stylesIncorrect;
    }
  }
  setSobreesdrujula() {
    this.bloquear=true;
    this.respuesta = 'Sobreesdrujula';
    this.isCorrect();
    if (this.correct==1) {
      this.puntaje += 10;
      this.styleSobreesdrujula = this.stylesCorrect;
    }
    else if(this.correct==2) {
      this.styleSobreesdrujula = this.stylesIncorrect;
    }
  }
  isCorrect() {
    if (this.respuesta == this.respuestas[this.indice]) {
      this.bloquear = true;
     this.correct=1;
    } else if (this.respuesta != this.respuestas[this.indice]) {
      this.correct=2;
    }

    else {

      return null;
    }
  }
  setRetroalimentacion(){
    if(this.respuesta=='Aguda')
      return this.retroalimentaciones[0];
      else if(this.respuesta=='Grave')
        return this.retroalimentaciones[1];
      else if(this.respuesta=='Esdrujula')
        return this.retroalimentaciones[2]; 
      else if(this.respuesta=='Sobreesdrujula')
        return this.retroalimentaciones[3];   

      

    }
    setContenido(){
      if(this.indice<=this.palabra.length-1){
        return true;
      }
      else{
        return false;
      }
    }
    Retry(){
    this.indice=0;
    this.puntaje=0;
    }
  }
  






