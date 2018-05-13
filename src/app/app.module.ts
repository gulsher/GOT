import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

// importing the services and router module

import { RouterModule, Router } from '@angular/router';
import { ApiHttpService } from './api-http.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SortPipe } from './sort.pipe';
import { SelectPipe } from './select.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    CharacterViewComponent,
    HouseViewComponent,
    NotFoundComponent,
    SortPipe,
    SelectPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, FormsModule,
    RouterModule.forRoot([{
      path: 'home', component: HomeComponent
    },
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'books/:id', component: BookViewComponent
    },
    {
      path: 'houses/:id', component: HouseViewComponent
    },
    {
      path: 'character/:id', component: CharacterViewComponent
    },
    {
      path: '**', component: NotFoundComponent
    }
  ])
  ],
  providers: [ApiHttpService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
