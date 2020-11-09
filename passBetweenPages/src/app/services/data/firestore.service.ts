import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) {}

  utlimoId: string;
  ultimoNombre: string;
  puntajeActual=0;


  createSong(
    userName: string,
    puntaje: number,
    
 
  ): Promise<void> {
    puntaje=0;
    const id = this.firestore.createId();
    this.utlimoId = id;
    this.ultimoNombre = userName;
    this.puntajeActual = puntaje;
    
  
    return this.firestore.doc(`songList/${id}`).set({
      id,
      userName,
      puntaje  ,
      
      

    });
  }

  modificar(
    userName: String,
    puntaje:number
 
  ): Promise<void> {
    
    const id = this.getUltimo();
    this.utlimoId = id;
    this.puntajeActual=this.puntajeActual+puntaje
    puntaje=this.puntajeActual
    
  console.log("pntaje"+this.puntajeActual)
    return this.firestore.doc(`songList/${id}`).set({
      id,
      userName,
      puntaje,
    });
  }

  getSongList(): Observable<User[]> {
    return this.firestore.collection<User>(`songList`).valueChanges();
  }

  ordernar(): Observable<User[]> {
    return this.firestore.collection<User>(`songList`, ref => ref.orderBy('puntaje',"desc")).valueChanges();
  }

  getSongDetail(songId: string): Observable<User> {
    return this.firestore.collection('songList').doc<User>(songId).valueChanges();
  }

  getUltimo(){
    return this.utlimoId;
    
  }
  getUltimouser(){
    let nombre = this.ultimoNombre;
    return nombre;
    
  }

  getPuntaje(){

    return this.puntajeActual;
  }
}