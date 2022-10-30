import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chore } from '../chore.model';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {
  chores: Chore[];
  completedMode = false;

  constructor(private choreService: ChoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url === '/completed-chores') {
      this.completedMode = true;
    }
    if (this.completedMode) {
      this.chores = this.choreService.getCompletedChores();
    } else {
      this.chores = this.choreService.getChores();
    }
  }


  onDeleteChore(id: number) {
    this.choreService.deleteChore(id);
    if (this.completedMode) {
      this.chores = this.choreService.getCompletedChores();
    } else {
      this.chores = this.choreService.getChores();
    }
  }

  onComplete(id: number) {
    this.choreService.completeChore(id);
    if (this.completedMode) {
      this.chores = this.choreService.getCompletedChores();
    } else {
      this.chores = this.choreService.getChores();
    }
  }
}
