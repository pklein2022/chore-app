import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chore } from '../chore.model';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chore-detail',
  templateUrl: './chore-detail.component.html',
  styleUrls: ['./chore-detail.component.css']
})
export class ChoreDetailComponent implements OnInit {
  chore: Chore;
  id: number;

  constructor(private choreService: ChoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.chore = this.choreService.getChore(this.id);
        }
      )
  }

}
