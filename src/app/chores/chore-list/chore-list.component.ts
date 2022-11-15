import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { UserService } from 'src/app/users/user.service';
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
  userRole: string = '';
  dataStorageService: any;

  constructor(private choreService: ChoreService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private dataService: DataStorageService) { }

  ngOnInit(): void {

    this.userRole = this.userService.currentUser.role;
    console.log(this.userService.currentUser, "Coming from current user")
    console.log(this.router.url);
    if (this.router.url === '/completed-chores') {
      this.completedMode = true;
    }
    if (this.completedMode) {
      this.chores = this.choreService.getCompletedChores();
    } else {
      this.chores = this.choreService.getNotCompletedChores();
    }
  }


  onDeleteChore(id: number) {
    this.choreService.deleteChore(id);
    if (this.completedMode) {
      this.chores = this.choreService.getCompletedChores();
    } else {
      this.chores = this.choreService.getNotCompletedChores();
    }
    this.dataStorageService.storeChores();
    this.dataStorageService.fetchChores();
  }

  onComplete(id: number) {
    this.choreService.completeChore(id);
    if (this.completedMode) {
      this.chores = this.choreService.getCompletedChores();
    } else {
      this.chores = this.choreService.getNotCompletedChores();
    }
  }
}
