import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Author } from '../models/Author'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authorsUrl:string = 'https://api.quotable.io/authors?limit=5&skip=0';
  moreAuthorsUrl:string = 'https://api.quotable.io/authors?limit=5&skip=5';

  constructor(private http:HttpClient) { }

  getAuthors():Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
  }

  getMoreAuthors():Observable<Author[]> {
    return this.http.get<Author[]>(this.moreAuthorsUrl)
  }

}
