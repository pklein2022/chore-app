import { Injectable } from "@angular/core";
import { Chore } from "./chore.model";

@Injectable({providedIn: 'root'})
export class ChoreService {

  private chores: Chore[] = [
    new Chore(
      "Homework",
      "Complete homework as soon as you get home from school.",
      "codelabs_angular/chore-app/src/assets/Images/homework.jpg",
      "Today",
       0.00,
    )
  ]
  constructor () {}

  getChores(){
    return this.chores.slice();
  }
  addChore(choreName: string, description: string, imagePath: string, dueDate: string, amount: number) {
    this.chores.push(
      new Chore(choreName, description, imagePath, dueDate, amount)
    )
  }
}

