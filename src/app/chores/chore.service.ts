import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Chore } from "./chore.model";

@Injectable({ providedIn: 'root' })
export class ChoreService {
  choresChanged = new Subject<Chore[]>();

  private chores: Chore[] = [
    new Chore(
      "Homework",
      "Complete homework as soon as you get home from school.",
      "assets/images/homework.jpg",
      "Today",
      0.00,
    )
  ]
  constructor() { }

  getChores() {
    return this.chores.slice();
  }

  getChore(index: number) {
    return this.chores[index];
  }

  addChore(chore: Chore) {
    this.chores.push(chore);
    this.choresChanged.next(this.chores.slice());
  }

  updateChore(index: number, newChore: Chore) {
    this.chores[index] = newChore;
    this.choresChanged.next(this.chores.slice());
  }

  deleteChore(index: number) {
    this.chores.splice(index, 1);
    this.choresChanged.next(this.chores.slice());
  }
}


