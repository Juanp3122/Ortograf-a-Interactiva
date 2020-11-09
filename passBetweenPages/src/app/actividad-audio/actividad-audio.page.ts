import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { User } from '../models/user.interface';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-actividad-audio',
  templateUrl: './actividad-audio.page.html',
  styleUrls: ['./actividad-audio.page.scss'],
})
export class ActividadAudioPage implements OnInit {
  indice = 0;
  audios = ["/assets/icon/avion.mp3",
    "/assets/icon/ANIS.mp3", "/assets/icon/ANTIACIDO.mp3", "/assets/icon/BARBARO.mp3", "/assets/icon/CODIGO.mp3",
    "/assets/icon/COLERA.mp3", "/assets/icon/ILEGITIMO.mp3", "/assets/icon/JURASICO.mp3", "/assets/icon/PIRAMIDE.mp3",
    "/assets/icon/SILABA.mp3"];
  respuestas = ["Avión", "Anís", "Antiácido", "Bárbaro", "Código", "Cólera", "Ilegítimo", "Jurásico", "Pirámide", "Sílaba"];
  public datafile = "";
  audio = document.getElementById('audio');
  respuesta: string;
  aux = 0;
  disabled = false;
  puntaje = 0;
  constructor(public alertController: AlertController,private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.datafile = this.audios[this.indice]
    this.explicacion();
  }
  siguiente() {
    this.indice = this.indice + 1;
    this.datafile = this.audios[this.indice]
    document.getElementById("audio").setAttribute('src', this.datafile);
    this.respuesta = "";
    this.disabled = false;
    this.aux = 0;

  }
  isCorrect() {
    this.disabled = true;
    if (
      this.respuesta.toUpperCase() === this.respuestas[this.indice].toUpperCase()) {
      this.aux = 1;
      this.puntaje = this.puntaje + 10;
    }
    else
      this.aux = 2;

    return this.aux;
  }
  setContenido() {
    if (this.indice <= this.audios.length - 1) {
      return true;
    }
    else {
      return false;
    }
  }
  Retry() {
    const userName = this.firestoreService.getUltimouser();
    this.firestoreService.modificar(userName, this.puntaje);
    this.puntaje = 0;
    this.indice = 0;
    this.datafile = this.audios[0]

  }
  async explicacion() {
    const alert = await this.alertController.create({
      header: 'Bienvenid@ a Escucha-Palabra',
      message: 'Aqui tendrás que tendras escribir correctamente las palabras que escuches .. Suerte',
      buttons: [{
        text: 'A JUGAR',
        handler: () => {
          
        }
      }
      ]
    });

    await alert.present();
  }
}


