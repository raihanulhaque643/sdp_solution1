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
    let exists = favorites.find(({ _id }) => author._id === _id)
    if(!exists) {
      favorites.unshift(author)
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      alert('This author is already in your favorites')
    }
  }

  // Remove from favorite
  removeFavorite(author) {
    this.author.favorite = false
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    let exists = favorites.find(({ _id }) => author._id === _id)
    if(exists) {
      favorites = favorites.filter((item) => {
        return item._id !== author._id
      })
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      alert('This author does not belong to the favorites list')
    }
  }

}
