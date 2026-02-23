import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../types';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  public latestPost!: BlogPost;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.latestPost = this.blogService.getLatestPosts();
  }
}
