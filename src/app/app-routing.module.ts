import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authors',
    loadChildren: () => import('./components/authors/authors.module').then(m => m.AuthorsModule)
  },
  { path: 'favorites',
    loadChildren: () => import('./components/pages/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  { path: '',   redirectTo: 'authors', pathMatch: 'full' },
  { path: '**',   redirectTo: 'authors', pathMatch: 'full' },
  { path: 'authors',   redirectTo: 'authors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
