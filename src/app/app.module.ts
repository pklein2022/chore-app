import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoresComponent } from './chores/chores.component';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChoreService } from './chores/chore.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert/alert.component';
import { PlaceHolderDirective } from './shared/placeholder/placeholder.directive';
import { AuthComponent } from './auth/auth.component';

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
    ChildComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ChoreService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],


  bootstrap: [AppComponent]
})
export class AppModule { }
