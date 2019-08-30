import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotesComponent } from './notes/notes.component';
import { TimeComponent } from './time/time.component';
import { ArtsComponent } from './arts/arts.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NotesComponent,
    TimeComponent,
    ArtsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
