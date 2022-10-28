import { Component, OnInit } from '@angular/core';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chore-detail',
  templateUrl: './chore-detail.component.html',
  styleUrls: ['./chore-detail.component.css']
})
export class ChoreDetailComponent implements OnInit {

  constructor(private choreService: ChoreService) { }

  ngOnInit(): void {
  }

  onSubmitForm(choreDetailFormObj){
    console.log(choreDetailFormObj);
    const choreName = choreDetailFormObj.value.choreName;
    const description = choreDetailFormObj.value.description;
    const imagePath = choreDetailFormObj.value.imagePath;
    const dueDate = choreDetailFormObj.value.dueDate;
    const amount = choreDetailFormObj.value.amount;

    this.choreService.addChore(choreName, description, imagePath, dueDate, amount);

  }
}
