import { Routes } from '@angular/router';
// import { Mainpage } from './Pages/mainpage/mainpage';
import { CreateRoom } from './components/create-room/create-room';
import { JoinRoom } from './components/join-room/join-room';
import { LandPage } from './Pages/land-page/land-page';

export const routes: Routes = [
  {
    path: '',
    component: LandPage
  },
  {
    path: 'create-room',
    component: CreateRoom
  },
  {
    path: 'join-room',
    component: JoinRoom
  }
];
