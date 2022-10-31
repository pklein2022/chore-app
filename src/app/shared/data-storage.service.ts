import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChoreService } from '../chores/chore.service';
import { Chore } from '../chores/chore.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private choreService: ChoreService) { }

  storeChores() {
    const chores = this.choreService.getChores();
    console.log(chores);
    this.http.put('https://chore-app-28867-default-rtdb.firebaseio.com/chores.json', chores
    )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchChores() {
    return this.http
      .get<Chore[]>('https://chore-app-28867-default-rtdb.firebaseio.com/chores.json')
      .pipe(
        tap(chores => {
          this.choreService.setChores(chores);
        })
      );
  }

}
