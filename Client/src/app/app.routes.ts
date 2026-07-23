import { Routes } from '@angular/router';
// import { Mainpage } from './Pages/mainpage/mainpage';
import { CreateRoom } from './components/create-room/create-room';
import { JoinRoom } from './components/join-room/join-room';
import { LandPage } from './Pages/land-page/land-page';
import { GameRoom } from './Pages/game-room/game-room';

export const routes: Routes = [
  {
    path: '',
    component: LandPage,
    children:[]
  },{
      path:'game',
      component:GameRoom
    }
];
