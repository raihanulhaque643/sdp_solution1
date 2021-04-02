import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/models/Author';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {
  @Input() author: Author;

  constructor() { }

  ngOnInit(): void {
  }

  // Set favorite
  setFavorite(author) {
    this.author.favorite = true
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    if(favorites == null) favorites = [];
    favorites.unshift(author)
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  // Remove from favorite
  removeFavorite(author) {
    this.author.favorite = false
    let favorites = JSON.parse(localStorage.getItem('favorites'))
  }

}
