import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChoreFormComponent } from './chore-form/chore-form.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChoreFormComponent,
    ChoreListComponent,
    CompletedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
