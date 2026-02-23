import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
];
