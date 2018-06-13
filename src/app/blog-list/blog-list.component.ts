import { Component, OnInit } from '@angular/core';
import { BlogService, ListPost, GetAllPostsResponse } from '../blog.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public posts: ListPost[];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.blogService.getAllPosts().subscribe((result: GetAllPostsResponse) => this.posts = result.posts);
  }

  openPost(id: string) {
    this.router.navigate(['/blog', id]);
  }

}
