import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites;

  constructor() { }

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites'))
  }

  // Remove from UI
  removeItem(newItem: string) {
    this.favorites = this.favorites.filter(item => item._id !== newItem)
  }

}
