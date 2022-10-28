import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: ChoreDetailComponent, pathMatch: 'full' },
  { path: 'chore-list', component: ChoreListComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'completed-list', component: CompletedListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
