import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Chore } from './chores/chore.model';
import { ChoreService } from './chores/chore.service';
import { DataStorageService } from './shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChoresResolverService implements Resolve<Chore[]> {

  constructor(private dataStorageService: DataStorageService, private choreService: ChoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const chores = this.choreService.getChores();

    if (chores.length === 0) {
      return this.dataStorageService.fetchChores();
    } else {
      return chores;
    }
  }
}
