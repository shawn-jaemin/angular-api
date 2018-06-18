import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatSelectModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from "./app.service";
import { SearchPipe } from "./pipes/search-pipe";
import { Paging } from './utils/paging';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [AppService, Paging],
  bootstrap: [AppComponent]
})
export class AppModule { }