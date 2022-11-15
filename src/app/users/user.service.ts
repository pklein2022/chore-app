import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersChanged = new Subject<User[]>();

  currentUser: User |null = null;

  private users: User[] = [
    new User(
      "testuser@test.com",
      '',
      'parent',
      '',
      null,
      "Test",
      "User",
    ),
  ]

  constructor() { }

  getUsers() {
    return this.users.slice();
  }

  getUser(index: number){
    return this.users[index];
  }

  addUser(user: User) {
    this.users.push(user);
    // let index = this.users.lastIndexOf(user);
    // this.users[index].id = index;
    this.usersChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: User) {

  }

  deleteUser(index: number){
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }
}
