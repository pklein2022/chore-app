import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ChildComponent } from './child/child.component';
import { ChoresResolverService } from './chores-resolver.service';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
  { path: 'chores', component: ChoreListComponent, resolve: [ChoresResolverService] },
  { path: 'chores/new', component: ChoreEditComponent },
  { path: 'chores/:id', component: ChoreDetailComponent, resolve: [ChoresResolverService] },
  { path: 'chores/:id/edit', component: ChoreEditComponent, resolve: [ChoresResolverService] },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'completed-chores', component: ChoreListComponent, resolve: [ChoresResolverService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
