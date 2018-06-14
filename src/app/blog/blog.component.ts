import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService, BlogPost } from '../blog.service';
import { switchMap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public post: BlogPost

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.post = BlogPost.empty
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.blogService.getPost(params.get('id')))
    ).subscribe((result: BlogPost) => this.post = result);
  }

}
