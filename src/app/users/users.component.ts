import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { UserService } from './user.service';
import {  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userForm:FormGroup;

  constructor(
    private userService: UserService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmitUserForm(){
    // this.userService.adduser()
  }
  onAddUser() { }
}
