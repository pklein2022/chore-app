import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Chore } from "./chore.model";

@Injectable({ providedIn: 'root' })
export class ChoreService {
  choresChanged = new Subject<Chore[]>();

  private chores: Chore[] = [
    // new Chore(
    //   "Homework",
    //   "Complete homework as soon as you get home from school.",
    //   "assets/images/homework.jpg",
    //   "Today",
    //   0.00,
    //   ""
    // ),
    // new Chore(
    //   "Dishes",
    //   "Empty dishwasher and load any dirty dishes.",
    //   "assets/images/dishes.jpg",
    //   "Daily",
    //   0.50,
    //   "10/10/2022"
    // )
  ]

  // constructor(private dataStorageService: DataStorageService) { }

  setChores(chores: Chore[]){
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

  checkCompleted(chore: Chore){
    return chore.completedDate !== '';
  }

  getChore(index: number) {
    return this.chores[index];
  }

  addChore(chore: Chore) {
    this.chores.push(chore);
    this.choresChanged.next(this.chores.slice());
    // this.dataStorageService.storeChores();
  }

  updateChore(index: number, newChore: Chore) {
    this.chores[index] = newChore;
    this.choresChanged.next(this.chores.slice());
    // this.dataStorageService.storeChores();
  }

  deleteChore(index: number) {
    this.chores.splice(index, 1);
    this.choresChanged.next(this.chores.slice());
    // this.dataStorageService.storeChores();
  }

  completeChore(index: number) {
    let date = new Date().toLocaleDateString();
    this.chores[index].completedDate = date;
    this.choresChanged.next(this.chores.slice());
    // this.dataStorageService.storeChores();
    console.log(this.chores);
  }
}


