import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl: string = "https://jsonplaceholder.typicode.com";

  constructor(
    private http: HttpClient
  ) { }

  public getRandomPosts(): Observable<Comment[]> {
    const randomId = Math.ceil(Math.random() * 30);
    return this.http.get<Comment[]>(`${this.baseUrl}/posts/${randomId}/comments`);
  }
}
