import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Author } from '../models/Author'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authorsUrl:string = 'https://api.quotable.io/authors?limit=10&skip=0';
  moreAuthorsUrl:string = 'https://api.quotable.io/authors?limit=10&skip=10';

  constructor(private http:HttpClient) { }

  getAuthors():Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
  }

  getMoreAuthors():Observable<Author[]> {
    return this.http.get<Author[]>(this.moreAuthorsUrl)
  }

}
