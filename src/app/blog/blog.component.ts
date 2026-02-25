import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../types';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(public blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getAllPostsTillCurrentWeek();
  }
}
