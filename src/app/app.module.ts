import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
