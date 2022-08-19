import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { IndividualTaskComponent } from './individual-task/individual-task.component';
import { AddingNewTaskComponent } from './adding-new-task/adding-new-task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksListComponent,
    IndividualTaskComponent,
    AddingNewTaskComponent,
    CompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
