import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoresResolverService } from './chores-resolver.service';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'chores', component: ChoreListComponent, resolve: [ChoresResolverService] },
  { path: 'chores/new', component: ChoreEditComponent },
  { path: 'chores/:id', component: ChoreDetailComponent, resolve: [ChoresResolverService] },
  { path: 'chores/:id/edit', component: ChoreEditComponent, resolve: [ChoresResolverService] },
  { path: 'parent', component: ParentComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserEditComponent },
  { path: 'users/:id/edit', component: UserEditComponent },
  { path: 'completed-chores', component: ChoreListComponent, resolve: [ChoresResolverService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
