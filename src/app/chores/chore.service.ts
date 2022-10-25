import { Injectable } from "@angular/core";
import { Chore } from "./chore.model";

@Injectable()
export class ChoreService {

  private chores: Chore[] = [
    new Chore(
      "Homework",
      "Complete homework as soon as you get home from school.",
      './src/assets/images/homework.jpg',
      "Today",
       0.00,
    )
  ]
}
