import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderPageComponent } from './header-page/header-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { FavoriteDetailComponent } from './favorite-detail/favorite-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderPageComponent,
    DetailPageComponent,
    FavoritePageComponent,
    FavoriteDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
