import { Injectable } from '@angular/core';
import { BlogPost } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Eerste week van mijn stage',
      date: new Date('2026-02-02'),
      content: 'This is the content of my first blog post.',
    },
    {
      id: 2,
      title: 'Tweede week van mijn stage',
      date: new Date('2026-02-09'),
      content: 'This is the content of my second blog post.',
    },
    {
      id: 3,
      title: 'Derde week van mijn stage',
      date: new Date('2026-02-16'),
      content: 'This is the content of my third blog post.',
    },
    {
      id: 4,
      title: 'Vierde week van mijn stage',
      date: new Date('2026-02-23'),
      content: 'This is the content of my fourth blog post.',
    },
    // {
    //   id: 5,
    //   title: 'Vijfde week van mijn stage',
    //   date: new Date('2026-03-01'),
    //   content: 'This is the content of my fifth blog post.',
    // },
    // {
    //   id: 6,
    //   title: 'Zesde week van mijn stage',
    //   date: new Date('2026-03-08'),
    //   content:
    //     'This is the content of my sixth blog post.',
    // },
  ];

  constructor() {}

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getLatestPosts() {
    // let latest = this.posts.reduce((curr, acc) =>
    //   new Date(curr.date) > new Date(acc.date) ? { ...curr } : { ...acc },
    // );

    let latest = this.posts[0];
    for (const post of this.posts) {
      if (post.date > latest.date) {
        latest = post;
      }
    }

    return latest;
  }

  getPreviewContent() {
    let post = this.getLatestPosts();
    let splittedPost = post.content.split(' ');

    return splittedPost.slice(0, 15).join(' ');
  }
}
