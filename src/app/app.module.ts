import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'home', component: LandingComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
