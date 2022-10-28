import { Component, OnInit } from '@angular/core';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {
  chores;

  constructor(private choreService:ChoreService) { }

  ngOnInit(): void {
    this.chores = this.choreService.getChores()
  }

}
