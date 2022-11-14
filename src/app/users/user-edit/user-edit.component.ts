import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: number;
  editMode = false;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] !== undefined;
          this.initForm();
        }
      );
  }

  onSubmitUserForm() {
    console.log("TEST");
    if (this.editMode) {
      this.userService.updateUser(this.id, this.userForm.value);
    } else {
      this.userService.addUser(this.userForm.value);
    }
    // this.dataStorageService.storeChores();
    // this.dataStorageService.fetchChores();
    this.router.navigate(['/users']);
  }

  private initForm() {
    let firstName = '';
    let lastName = '';
    let email = '';
    let userRole = '';
    let password = '';
    let verifyPassword = '';
    let userId = '';

    if (this.editMode) {
      const user = this.userService.getUser(this.id);
      firstName = user.firstName;
      lastName = user.lastName;
      email = user.email;
      userRole = user.role;
      password = '';
      verifyPassword = '';
      userId = user.id;
    }

    this.userForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'email': new FormControl(email, Validators.required),
      'userRole': new FormControl(userRole, Validators.required),
      'password': new FormControl(password, Validators.required),
      'verifyPassword': new FormControl(verifyPassword, Validators.required),
      'userId': new FormControl(userId),
    })

  }

}
