import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.page.html',
  styleUrls: ['./ahorcado.page.scss'],
})
export class AhorcadoPage implements OnInit {

  readonly LETRAS = ["A", "Á", "B", "C", "D", "E", "É", "F", "G",
    "H", "I", "Í", "J", "K", "L", "M", "N",
    "Ñ", "O", "Ó", "P", "Q", "R", "S", "T",
    "U", "Ú", "V", "W", "X", "Y", "Z"];

  readonly PALABRAS = ["SALTABA", "ÁNGEL", "CAFE",
                       "ACCÍON", "PARÍS", "PERSONALICÉ",];
                       
  palabraAdivinadaPorAhora: string;
  palabraAAdivinar: string;
  fallos: Array<string>
  numFallos: number;
  numAciertos: number;

  constructor(public alertController: AlertController) {
    this.inicializar();
  }
  inicializar(): void {
    this.numAciertos = 0;
    this.numFallos = 0;
    this.fallos = [];
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
      if (this.numFallos < 5) {
        this.aumentarFallos(letra);
      } else {
        this.mostrarMensajeDePerder();
      }
    } else {
      if (this.numAciertos == this.palabraAAdivinar.length) {
        this.mostrarMensajeDeGanar()
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
