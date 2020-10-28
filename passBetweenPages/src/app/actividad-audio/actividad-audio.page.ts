import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-audio',
  templateUrl: './actividad-audio.page.html',
  styleUrls: ['./actividad-audio.page.scss'],
})
export class ActividadAudioPage implements OnInit {
  indice=0;
  audios=["/assets/icon/avion.mp3",
  "/assets/icon/ANIS.mp3","/assets/icon/ANTIACIDO.mp3","/assets/icon/BARBARO.mp3","/assets/icon/CODIGO.mp3",
  "/assets/icon/COLERA.mp3","/assets/icon/ILEGITIMO.mp3","/assets/icon/JURASICO.mp3","/assets/icon/PIRAMIDE.mp3",
  "/assets/icon/SILABA.mp3"];
  respuestas=["Avión","Anís","Antiácido","Bárbaro","Código","Cólera","Ilegítimo","Jurásico","Pirámide","Sílaba"];
  public datafile ="";
  audio = document.getElementById('audio');
  respuesta:string;
  aux=0;
  disabled=false;
  puntaje=0;
  constructor() { }

  ngOnInit() {
    this.datafile=this.audios[this.indice]
  }
  siguiente() {
    this.indice=this.indice+1;
    this.datafile=this.audios[this.indice]
    document.getElementById("audio").setAttribute('src', this.datafile);
    this.respuesta="";
    this.disabled=false;
    this.aux=0;
    
  }
  isCorrect(){
    this.disabled=true;
    if(
      this.respuesta.toUpperCase() === this.respuestas[this.indice].toUpperCase()){
      this.aux=1;
      this.puntaje=this.puntaje+10;
    }
      else
      this.aux=2;

    return this.aux;
  }
  setContenido(){
    if(this.indice<=this.audios.length-1){
      return true;
    }
    else{
      return false;
    }
  }
  Retry(){
    
    this.puntaje=0;
    this.indice=0;
    this.datafile=this.audios[0]
    
  }
  }


