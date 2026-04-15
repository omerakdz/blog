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
      title: 'Kennismaking en oriëntatie',
      date: new Date('2026-02-02'),
      content:
        'De eerste week van mijn stage was vooral gericht op kennismaking en oriëntatie. Ik kreeg een uitgebreide uitleg over het project, de werkwijzen en de technologieën die we gebruiken. Thuis heb ik de projectdocumentatie doorgenomen en nagedacht over mogelijke aanpakken. Vervolgens maakte ik een kennismakingsoefening die ik samen met mijn mentor heb doorgenomen en verbeterd. De rest van de week stond in het teken van Angular oefeningen om de framework beter onder de knie te krijgen.',
    },
    {
      id: 2,
      title: 'Project setup en kennismaking met C# ASP.NET',
      date: new Date('2026-02-09'),
      content:
        'In de tweede week ben ik begonnen met de project setup en het opzetten van de connectie met GitLab. Daarna heb ik kennisgemaakt met C# ASP.NET door middel van oefeningen. Ik heb deze kennismakingsoefening verder aangepast en verbeterd, en ben blijven oefenen met C# ASP.NET. Ook heb ik een database schema aangemaakt. Aan het einde van de week heb ik een mockup ontworpen met v0.app.',
    },
    {
      id: 3,
      title: 'Database schema en opzoekwerk naar authenticatiemethoden',
      date: new Date('2026-02-16'),
      content:
        'Deze week begon met een meeting waarin we de mockup en het database schema hebben besproken. Op basis van de feedback heb ik het database schema aangepast. Verder heb ik opzoekwerk gedaan naar verschillende authenticatiemethoden voor een multitenant applicatie, zoals OpenID en username/password.',
    },
    {
      id: 4,
      title: 'Opvolging database schema en blog applicatie',
      date: new Date('2026-02-23'),
      content:
        'De vierde week stond in het teken van het database schema en de blog applicatie. Na een meeting over het database schema ben ik begonnen aan de blog. Ik heb nagedacht over aanpassingen aan het database schema en heb de blog grotendeels afgemaakt.',
    },
    {
      id: 5,
      title: 'Afmaken van database schema + Moving forward',
      date: new Date('2026-03-02'),
      content:
        'We zijn de week begonnen met een meeting waar we weer de database schema hebben besproken, dankzij de hulp van Dimitri hebben we goede aanpassingen kunnen maken. Volgens de collegas zijn we ook heel dichtbij het eindresultaat. Woensag ben ik naar moving forward geweest, een event waar verschillende bedrijven zich presenteren aan studenten. Ik heb hier veel interessante gesprekken gehad en ook mijn zorgen verteld, zoals hoe ik werk ga kunnen vinden in deze sector met AI etc. . ',
      images: ['assets/moving_forward.jpg'],
    },

    {
      id: 6,
      title: 'Frontend + backend beginnen',
      date: new Date('2026-03-09'),
      content:
        'Dit week zijn we eindelijk begonnen aan de frondend en backend na een lange tijd van bugs fixen en problemen. Er zijn hier en daar nog was issues zoals dat de login in een loop blijft waardoor we moeilijk progress kunnen maken. We hebben al tabellen aangemaakt in de database met mockdata. Ook hebben we controllers en models etc toegevoegd aan de backend, en hebben we ook de backend aan de frontend gekoppeld door de mockdata te tonen in een tabel als test.',
    },
    {
      id: 7,
      title: 'Frontend + backend verder ontwikkelen',
      date: new Date('2026-03-16'),
      content:
        'We hebben over de tabellen gesproken die in de frontend werden getoond, John had een aantal aanpassingen voorgesteld aan die tabellen + aan de database. We hebben de database schema aangepast en met EF core de database geupdate en gelinked. Ook hebben we ons bezig gehouden met bugs fixen. Verder waren we klaar met alles, nu is het wachten op onze mentoren tot ze een applicatie bouwen waar we onze lokale tabellen in de database met elkaar kunenn koppelen.',
    },
    {
      id: 8,
      title: 'Backend aanpassing',
      date: new Date('2026-03-23'),
      content:
        'We hebben de backend aangepast en werken met een andere werkwijze. Verder was het vooral debuggen en problemen oplossen door de aanpassingen. Hier en daar hebben we ook nog visueel wat aangepast aan de frontend.',
    },
    {
      id: 9,
      title: 'Frontend en backend verder ontwikkelen',
      date: new Date('2026-03-30'),
      content:
        'Dit week zijn we vooral bezig geweest met het maken van mock paginas en navigatie voor de frontend, en het verder ontwikkelen van de backend. Verder hebben we een meeting waar de mentor de backend veranderingen nakeek en feedback gaf. Verder waren we gewoon bezig met bugs fixen en problemen oplossen.',
    },
    {
      id: 10,
      title: 'Frontend en backend verder ontwikkelen',
      date: new Date('2026-04-06'),
      content:
        'Dit week hebben we heel de week thuis gewerkt vanwege de paasvakantie, we hebben vooral gewerkt aan het verder ontwikkelen van de frontend en backend. We hebben een aantal mock paginas gemaakt en de navigatie verbeterd.',
    },
    {
      id: 11,
      title: 'Frontend en backend verder ontwikkelen',
      date: new Date('2026-04-13'),
      content:
        'We zijn de week begonnen met een kleine meeting waar we de voortgang van de frontend en backend hebben besproken. We hebben een aantal aanpassingen gemaakt aan de frontend, zoals het verbeteren van de navigatie en het toevoegen van een aantal mock paginas.',
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
    return filteredPosts;
  }
}
