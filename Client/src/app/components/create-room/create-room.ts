import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { required, validate, validateHttp } from '@angular/forms/signals';
import { Room } from '../../Services/room';
import { Router, RouterModule } from '@angular/router';
import { AvatarChange } from "../avatar-change/avatar-change";
// import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-create-room',
  imports: [ReactiveFormsModule, RouterModule, AvatarChange, AvatarChange],
  templateUrl: './create-room.html',
  styleUrl: './create-room.css',
})
export class CreateRoom {


  constructor(private roomService: Room,
    private router:Router
  ){}


  //generating room ID
  createRoomId= (length: number = 5)=>{
      const characters = 'ABCDEFGHIJKL123456789';
      let roomId = '';

      for(let i =0;i<length; i++){
        let randomIndex = Math.floor(Math.random()* characters.length);
        roomId += characters[randomIndex]
      }
      return roomId;
    }
   @Input() roomId:string=this.createRoomId();

  roomForm = new FormGroup({
     
    roomID: new FormControl(this.roomId),
    roomName: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required)

  })
  createRoom(){
     const id = this.roomForm.get('roomID')?.value;
     this.roomService.setRoomId(this.roomId);
    //  console.log("Created Room:", id);
    this.router.navigate(['game'])
  }

  @Output() close = new EventEmitter<void>();
  closePopup() {
    this.close.emit();
  }
}
