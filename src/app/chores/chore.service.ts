import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Chore } from "./chore.model";

@Injectable({ providedIn: 'root' })
export class ChoreService {
  choresChanged = new Subject<Chore[]>();

  private chores: Chore[] = [
    // new Chore(
    //   1,
    //   "Homework",
    //   "Complete homework as soon as you get home from school.",
    //   "assets/images/homework.jpg",
    //   "Today",
    //   0.00,
    //   ""
    // ),
    // new Chore(
    //   2,
    //   "Dishes",
    //   "Empty dishwasher and load any dirty dishes.",
    //   "assets/images/dishes.jpg",
    //   "Daily",
    //   0.50,
    //   "10/10/2022"
    // )
  ]

  constructor() { }

  setChores(chores: Chore[]) {
    this.chores = chores;
    this.choresChanged.next(this.chores.slice());
  }

  getChores() {
    return this.chores.slice();
  }

  getNotCompletedChores() {
    return this.chores.filter(this.checkNotCompleted);
  }

  checkNotCompleted(chore: Chore) {
    return chore.completedDate === '';
  }

  getCompletedChores() {
    return this.chores.filter(this.checkCompleted);
  }

  checkCompleted(chore: Chore) {
    return chore.completedDate !== '';
  }

  getChore(index: number) {
    return this.chores[index];
  }

  addChore(chore: Chore) {
    this.chores.push(chore);
    let index = this.chores.lastIndexOf(chore);
    this.chores[index].id = index;
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

  completeChore(index: number) {
    let date = new Date().toLocaleDateString();
    this.chores[index].completedDate = date;
    this.choresChanged.next(this.chores.slice());
    console.log(this.chores);
  }

  getChoreAmountEarned() {
    let chores = this.getCompletedChores();
    let amount = 0;
    for (let i = 0; i < chores.length; i++) {
      amount += +chores[i].amount;
    }
    return amount;
  }
}


