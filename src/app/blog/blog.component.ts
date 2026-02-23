import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../types';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'blog',
  standalone: true,
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
}
