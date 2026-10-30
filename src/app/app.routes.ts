import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { AboutComponent } from './pages/about/about';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { GalleryComponent } from './pages/gallery/gallery';
import { CrudComponent } from './pages/crud/crud';
import { ProfileComponent } from './pages/profile/profile';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
