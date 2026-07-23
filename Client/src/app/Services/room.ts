import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Room {
  roomId = '';

  private rooms:string[] = [];

  setRoomId(id:string){
    this.rooms.push(id)
  }

  checkRooms(id:string):boolean{
    return this.rooms.includes(id);
  }

  getRoomId(){
    return this.roomId;
  }
}
