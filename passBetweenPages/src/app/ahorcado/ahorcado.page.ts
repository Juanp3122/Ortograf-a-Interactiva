import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.page.html',
  styleUrls: ['./ahorcado.page.scss'],
})
export class AhorcadoPage implements OnInit {

  readonly LETRAS = ["a", "á", "b", "c", "d", "e", "é", "f", "g",
    "h", "i", "í", "j", "k", "l", "m", "n",
    "ñ", "o", "ó", "p", "q", "r", "s", "t",
    "u", "ú", "v", "w", "x", "y", "z"];

  readonly PALABRAS = ["saltaba", "ángel", "cafe",
    "accíon", "parís", "personalicé",
    "cajon", "sofá", "camisa", "lápiz",
    "cántaro", "accíon", "pájaro"];

  palabraAdivinadaPorAhora: string;
  palabraAAdivinar: string;
  fallos: Array<string>
  numFallos: number;
  numAciertos: number;

  Aciertos: Array<string>

  constructor(public alertController: AlertController) {
    this.inicializar();
  }
  inicializar(): void {
    this.numAciertos = 0;
    this.numFallos = 0;
    this.fallos = [];
    this.Aciertos = [];
    let numero = Math.floor(Math.random() * this.PALABRAS.length);
    this.palabraAAdivinar = this.PALABRAS[numero];

    this.generarPalabraAdivinadaPorAhor();
  }

  generarPalabraAdivinadaPorAhor(): void {
    this.palabraAdivinadaPorAhora = "";
    for (let i = 0; i < this.palabraAAdivinar.length; i++) {
      this.palabraAdivinadaPorAhora += "-";
    }
  }

  botonClickend(letra: string): void {
    if (!this.letraAcertada(letra)) {
      if (this.numFallos < 6) {
        this.aumentarFallos(letra);
      } else {
        this.mostrarMensajeDePerder();
        console.log(this.numFallos);
        
      }
    } else {

      let aciertos = this.Aciertos.toString();
      for (let i = 0; i < aciertos.length; i++) {
        aciertos = aciertos.replace(",", "")
      }

      if (this.numAciertos == this.palabraAAdivinar.length
        && aciertos == this.palabraAAdivinar) {
        this.mostrarMensajeDeGanar()
        console.log(this.numFallos);


      }
    }
  }

  aumentarFallos(letra: string): void {
    this.fallos.push(letra);
    this.numFallos++;
  }


  letraAcertada(letra: string): boolean {
    let letraAcertada = false;
    let longitud = this.palabraAAdivinar.length;


    for (let i = 0; i < longitud; i++) {
      if (letra == this.palabraAAdivinar[i]) {
        this.palabraAdivinadaPorAhora =
          (i == 0 ? "" : this.palabraAdivinadaPorAhora.substr(0, i)) +
          letra +
          this.palabraAdivinadaPorAhora.substr(i + 1);
        letraAcertada = true;
        this.numAciertos++;
        this.Aciertos[i] = letra;

      }
    }
    return letraAcertada;
  }

  async mostrarMensajeDePerder() {
    const alert = await this.alertController.create({
      header: 'Has Perdido',
      message: '!Lo siento¡ Pulse ok para juga otra vez.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.inicializar();
        }
      }
      ]
    });

    await alert.present();
  }

  async mostrarMensajeDeGanar() {
    const alert = await this.alertController.create({
      header: 'Has Ganado',
      message: '!Felicidades¡ Pulse ok para juga otra vez.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.inicializar();
        }
      }
      ]
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
