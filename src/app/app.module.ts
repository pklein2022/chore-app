import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { FormsModule } from '@angular/forms';
import { ChoresComponent } from './chores/chores.component';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompletedListComponent,
    ChoresComponent,
    ChoreDetailComponent,
    ChoreEditComponent,
    ChoreListComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
