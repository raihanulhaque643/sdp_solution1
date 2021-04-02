import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/Author'
import { AuthorService } from '../../services/author.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  page:number = 1;
  authors:Author[];

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data['results']
    });
  }

  nextPage() {
    this.authorService.getMoreAuthors().subscribe((data) => {
      this.authors = data['results']
      this.page = 2;
      window.scroll(0,0)
    });
  }

  prevPage() {
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data['results']
      this.page = 1;
      window.scroll(0,0)
    });
  }

}
