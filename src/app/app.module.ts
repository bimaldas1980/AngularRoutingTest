import { ThemeOneCompOneComponent } from './components/theme-one/theme-one-comp-one/theme-one-comp-one.component';
import { ThemeOneCompTwoComponent } from './components/theme-one/theme-one-comp-two/theme-one-comp-two.component';
import { ThemeTwoCompOneComponent } from './components/theme-two/theme-two-comp-one/theme-two-comp-one.component';
import { ThemeTwoCompTwoComponent } from './components/theme-two/theme-two-comp-two/theme-two-comp-two.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';
import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
