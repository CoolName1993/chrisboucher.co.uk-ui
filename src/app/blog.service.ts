import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<GetAllPostsResponse> {
    return this.http.get<GetAllPostsResponse>(`${BlogBaseURL}/posts.json`);
  }

  getPost(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${BlogBaseURL}/posts/${id}.json`);
  }
}

export class ListPost {
  constructor(public id: string, public title: string, public snippet: string, public posted: Date) {}
}

export class GetAllPostsResponse {
  constructor(public posts: ListPost[]) {}
}

export class BlogPost {
  constructor(public id: string, public title: string, public content: string[], public postDate: Date, public author: string) {}
  static empty: BlogPost = new BlogPost("", "", [], new Date(), "");
}

export const BlogBaseURL: string = 'https://blog.chrisboucher.co.uk';
