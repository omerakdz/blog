import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPost } from '../types';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];
  public searchTerm: string = '';
  public filteredPosts: BlogPost[] = [];

  constructor(public blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getAllPostsTillCurrentWeek();
    this.filteredPosts = this.posts;
  }

  onSearch() {
    this.filteredPosts = this.posts.filter((t) =>
      t.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  resetPosts() {
    this.filteredPosts = this.posts;
  }
}
