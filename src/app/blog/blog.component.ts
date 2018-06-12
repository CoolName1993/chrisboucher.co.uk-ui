import { Component, OnInit } from '@angular/core';
import { BlogService, ListPost, GetAllPostsResponse } from '../blog.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts: ListPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllPosts().subscribe((result: GetAllPostsResponse) => this.posts = result.posts);
  }

}
