import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorItemComponent,
    FavoritesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
