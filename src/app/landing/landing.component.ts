import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../types';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  public latestPost!: BlogPost;
  public previewPost!: string;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.latestPost = this.blogService.getPostByCurrentWeek();
    this.previewPost = this.blogService.getPreviewContent();
  }
}
