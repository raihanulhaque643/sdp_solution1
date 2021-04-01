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
  setFavorite() {
    this.author.favorite = true
  }

  // Remove from favorite
  removeFavorite() {
    this.author.favorite = false
  }

}
