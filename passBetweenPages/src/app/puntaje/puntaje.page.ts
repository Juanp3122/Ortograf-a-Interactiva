import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { User} from '../models/user.interface';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.page.html',
  styleUrls: ['./puntaje.page.scss'],
})
export class PuntajePage implements OnInit {


  public songList: Observable<User[]>;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.songList = this.firestoreService.getSongList();
  }

}
