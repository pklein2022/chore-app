import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: ParentComponent, pathMatch: 'full' },
  { path: 'chores', component: ChoreListComponent },
  { path: 'chores/new', component: ChoreEditComponent },
  { path: 'chores/:id', component: ChoreDetailComponent },
  { path: 'chores/:id/edit', component: ChoreEditComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'completed-list', component: CompletedListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
