import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameRoom } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private roomsSubject = new BehaviorSubject<GameRoom[]>([]);
  public rooms$: Observable<GameRoom[]> = this.roomsSubject.asObservable();

  constructor() {}

  getRooms(): GameRoom[] {
    return this.roomsSubject.value;
  }

  setRooms(rooms: GameRoom[]): void {
    this.roomsSubject.next(rooms);
  }

  addRoom(room: GameRoom): void {
    const currentRooms = this.roomsSubject.value;
    this.roomsSubject.next([...currentRooms, room]);
  }

  removeRoom(roomId: string): void {
    const currentRooms = this.roomsSubject.value;
    this.roomsSubject.next(currentRooms.filter(room => room.id !== roomId));
  }
}
