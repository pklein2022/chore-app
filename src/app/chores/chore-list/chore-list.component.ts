import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {
  chores;

  constructor(private choreService: ChoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.chores = this.choreService.getChores();
  }

  onDeleteChore(id: number) {
    this.choreService.deleteChore(id);
    this.chores = this.choreService.getChores();
  }

}
