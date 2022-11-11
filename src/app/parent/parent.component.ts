import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.dataStorageService.storeChores();
  }

  onFetchData() {
    this.dataStorageService.fetchChores().subscribe();
  }

 
}
