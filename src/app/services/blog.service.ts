import { Injectable } from '@angular/core';
import { BlogPost } from '../types';
import { filter, last } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Eerste week van mijn stage',
      date: new Date('2026-02-02'),
      content:
        'De eerste week van mijn stage was vooral gericht op kennismaking en oriëntatie. Ik kreeg een uitgebreide uitleg over het project, de werkwijzen en de technologieën die we gebruiken. Thuis heb ik de projectdocumentatie doorgenomen en nagedacht over mogelijke aanpakken. Vervolgens maakte ik een kennismakingsoefening die ik samen met mijn mentor heb doorgenomen en verbeterd. De rest van de week stond in het teken van Angular oefeningen om de framework beter onder de knie te krijgen.',
    },
    {
      id: 2,
      title: 'Tweede week van mijn stage',
      date: new Date('2026-02-09'),
      content:
        'In de tweede week ben ik begonnen met de project setup en het opzetten van de connectie met GitLab. Daarna heb ik kennisgemaakt met C# ASP.NET door middel van oefeningen. Ik heb deze kennismakingsoefening verder aangepast en verbeterd, en ben blijven oefenen met C# ASP.NET. Ook heb ik een database schema aangemaakt. Aan het einde van de week heb ik een mockup ontworpen met v0.app.',
    },
    {
      id: 3,
      title: 'Derde week van mijn stage',
      date: new Date('2026-02-16'),
      content:
        'Deze week begon met een meeting waarin we de mockup en het database schema hebben besproken. Op basis van de feedback heb ik het database schema aangepast. Verder heb ik opzoekwerk gedaan naar verschillende authenticatiemethoden voor een multitenant applicatie, zoals OpenID en username/password.',
    },
    {
      id: 4,
      title: 'Vierde week van mijn stage',
      date: new Date('2026-02-23'),
      content:
        'De vierde week stond in het teken van het database schema en de blog applicatie. Na een meeting over het database schema ben ik begonnen aan de blog. Ik heb nagedacht over aanpassingen aan het database schema en heb de blog grotendeels afgemaakt.',
    },
    {
      id: 5,
      title: 'Vijfde week van mijn stage',
      date: new Date('2026-03-01'),
      content: 'This is the content of my fifth blog post.',
    },
    {
      id: 6,
      title: 'Zesde week van mijn stage',
      date: new Date('2026-03-08'),
      content: 'This is the content of my sixth blog post.',
    },
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
    let post = this.getPostByCurrentWeek();
    let splittedPost = post.content.split(' ');

    return splittedPost.slice(0, 15).join(' ');
  }

  getPostByCurrentWeek() {
    let today: Date = new Date();
    let filteredPosts = this.posts.filter((p) => p.date < today);
    let lastIndex = filteredPosts.length - 2;
    let currentPost = filteredPosts[lastIndex];

    return currentPost;
  }

  getAllPostsTillCurrentWeek() {
    let today: Date = new Date();
    let filteredPosts = this.posts.filter((p) => p.date < today);
    let currentPost = filteredPosts.slice(0, filteredPosts.length - 1);
    return currentPost;
  }
}
