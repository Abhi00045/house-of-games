import { Routes } from '@angular/router';
import { Mainpage } from './Pages/mainpage/mainpage';

export const routes: Routes = [
  {
    path: '',
    component: Mainpage,
    data: { title: 'Home' }
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
