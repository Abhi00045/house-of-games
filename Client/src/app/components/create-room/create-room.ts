import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-create-room',
  imports: [ReactiveFormsModule],
  templateUrl: './create-room.html',
  styleUrl: './create-room.css',
})
export class CreateRoom {

  // generateRoomId(length:number=6){
  //   const char = 'ABCDEFGHIJK1234567890';
  //  let id = '';

  //   for (let i =0;i<length; i++){
  //     const randomIndex = Math.floor(Math.random()*char.length);
  //     id += char[randomIndex]
  //   }

  //   const roomID = this.generateRoomId();
  //   console.log(roomID);
  // }

  roomForm = new FormGroup({
     
    roomID: new FormControl(""),
    roomName: new FormControl(""),
    userName: new FormControl("")

  })
  
}
