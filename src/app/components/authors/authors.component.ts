import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/Author'
import { AuthorService } from '../../services/author.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:Author[];

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data['results']
    });
  }

}
