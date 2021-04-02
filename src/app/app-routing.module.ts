import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component'
import { FavoritesComponent } from './components/pages/favorites/favorites.component'

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '',   redirectTo: 'authors', pathMatch: 'full' },
  { path: '**',   redirectTo: 'authors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
