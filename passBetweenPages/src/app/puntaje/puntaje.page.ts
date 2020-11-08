import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { User} from '../models/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.page.html',
  styleUrls: ['./puntaje.page.scss'],
})
export class PuntajePage implements OnInit {


  
  public prueba: Observable<User[]>;
  public song: User;

  constructor(private firestoreService: FirestoreService,private route: ActivatedRoute) { }

  ngOnInit() {
    

    this.prueba = this.firestoreService.ordernar();


    const songId: string = this.firestoreService.getUltimo();

    

    this.firestoreService.getSongDetail(songId).subscribe(song => {
      this.song = song;
    });



  }



}
