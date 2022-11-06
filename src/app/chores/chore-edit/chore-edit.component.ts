import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chore-edit',
  templateUrl: './chore-edit.component.html',
  styleUrls: ['./chore-edit.component.css']
})
export class ChoreEditComponent implements OnInit {
  id: number;
  editMode = false;
  choreForm: FormGroup;

  constructor(
    private choreService: ChoreService,
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

  onSubmitForm() {
    if (this.editMode) {
      this.choreService.updateChore(this.id, this.choreForm.value);
    } else {
      this.choreService.addChore(this.choreForm.value);
    }
    this.dataStorageService.storeChores();
    this.dataStorageService.fetchChores();
    this.router.navigate(['/chores']);
  }

  private initForm() {
    let choreName = '';
    let choreDescription = '';
    let choreImagePath = '';
    let choreDueDate = '';
    let choreAmount = 0;
    let choreCompletedDate = '';
    let choreId = -1;

    if (this.editMode) {
      const chore = this.choreService.getChore(this.id);
      choreName = chore.choreName;
      choreDescription = chore.description;
      choreImagePath = chore.imagePath;
      choreDueDate = chore.dueDate;
      choreAmount = chore.amount;
      choreCompletedDate = chore.completedDate;
      choreId = chore.id;
    }

    this.choreForm = new FormGroup({
      'choreName': new FormControl(choreName, Validators.required),
      'description': new FormControl(choreDescription, Validators.required),
      'imagePath': new FormControl(choreImagePath, Validators.required),
      'dueDate': new FormControl(choreDueDate, Validators.required),
      'amount': new FormControl(choreAmount, Validators.required),
      'completedDate': new FormControl(choreCompletedDate),
      'id': new FormControl(choreId),
    })
  }

}
