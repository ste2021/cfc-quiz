import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    NavComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, QuestionsComponent, NavComponent]
})
export class AppModule { }
