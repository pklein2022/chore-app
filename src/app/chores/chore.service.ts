import { Injectable } from "@angular/core";

@Injectable()
export class Chore {

  private chores: Chore[] = [
    new Chore(
      "Homework",
      "Complete homework as soon as you get home from school.",
      './src/assets/images/homework.jpg',
      "Today",
      "0.00",
    )
  ]
}
