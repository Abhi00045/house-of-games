import { Component, EventEmitter, Output } from '@angular/core';
import { Room } from '../../Services/room';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-room',
  imports: [FormsModule],
  templateUrl: './join-room.html',
  styleUrl: './join-room.css',
})
export class JoinRoom {

  constructor(private roomService:Room,
    private router:Router
  ){}

  ngOnInit(){
    // const existingId = this.roomService.checkRooms(this.roomId);
    // console.log(existingId); 
  }

  joinRoom(from:any){
     
console.log("cool")
  }

  




@Output() close = new EventEmitter<void>();
  closePopup() {
    this.close.emit();
  }
}
