import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoalComponent } from './goal/goal.component';
import { RiskEvaluationComponent } from './risk-evaluation/risk-evaluation.component';
import { DataBComponent } from './data-b/data-b.component';
import { SearchComponent } from './search/search.component';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyDyMl_Je9X58h4vdI5FeQKVWL3JSeRnzCU",
  authDomain: "prac1-fa07d.firebaseapp.com",
  databaseURL: "https://prac1-fa07d.firebaseio.com",
  projectId: "prac1-fa07d",
  storageBucket: "prac1-fa07d.appspot.com",
  messagingSenderId: "639517938043"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    GoalComponent,
    RiskEvaluationComponent,
    DataBComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: SearchComponent},
      {path: 'Home', component: LandingComponent},
      {path: 'Goal', component: GoalComponent},
      {path: 'Risk Evaluation', component: RiskEvaluationComponent},
      {path: 'data', component: DataBComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
