import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/Author'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:Author[];

  constructor() { }

  ngOnInit(): void {
    this.authors = [
      {
        _id: '1',
        name: 'Raihan',
        bio: 'sldkfjsjf sdlfjls sdfjslkfj',
        link: 'ajd sad asdasd',
        favorite: false
      },
      {
        _id: '2',
        name: 'Siam',
        bio: 'fghhfg ertert erte',
        link: 'ajd sad asdasd',
        favorite: true
      },
      {
        _id: '3',
        name: 'Haseb',
        bio: 'lkl;jklj qwe wer',
        link: 'ajd sad asdasd',
        favorite: false
      }
    ]
  }

}
