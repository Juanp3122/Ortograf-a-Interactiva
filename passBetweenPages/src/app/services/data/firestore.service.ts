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

  createSong(
    userName: string,
    puntaje: number,
 
  ): Promise<void> {
    const id = this.firestore.createId();
  
    return this.firestore.doc(`songList/${id}`).set({
      id,
      userName,
      puntaje
      

    });
  }


  getSongList(): Observable<User[]> {
    return this.firestore.collection<User>(`songList`).valueChanges();
  }
}