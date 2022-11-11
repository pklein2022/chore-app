import { Injectable } from '@angular/core';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User(
      "testuser@test.com",
      "123",
      "child",
    ),
  ]

  constructor() { }
}
