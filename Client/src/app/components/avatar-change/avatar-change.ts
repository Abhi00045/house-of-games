import { Component } from '@angular/core';
import { profilePics } from '../../data/pfps';

@Component({
  selector: 'app-avatar-change',
  imports: [],
  templateUrl: './avatar-change.html',
  styleUrl: './avatar-change.css',
})
export class AvatarChange {
  
  pfps = profilePics;
  
  

}
