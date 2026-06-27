// import { Component } from '@angular/core';
// import { NavigationBar } from "../../Components/navigation-bar/navigation-bar";


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface GameOption {
  id: string;
  name: string;
  icon: string;
  tagline: string;
}

@Component({
  selector: 'app-mainpage',
  imports: [CommonModule],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})

export class Mainpage {

  constructor(private router: Router) {}

  playersOnline = 0;

  games: GameOption[] = [
    { id: 'codenames', name: 'Codenames', icon: '🕵️', tagline: 'Spy. Guess. Win.' },
    { id: 'monopoly', name: 'Monopoly', icon: '🎩', tagline: 'Buy it all up.' },
    { id: 'scribble', name: 'Scribble', icon: '✏️', tagline: 'Draw & guess.' },
    { id: 'chameleon', name: 'Chameleon', icon: '🦎', tagline: 'Blend in or lose.' }
  ];

  selectedGameId: string | null = null;

  get selectedGame(): GameOption | null {
    return this.games.find(g => g.id === this.selectedGameId) ?? null;
  }

  selectGame(id: string): void {
    this.selectedGameId = this.selectedGameId === id ? null : id;
  }

  joinRoom(): void {
    if (!this.selectedGame) {
      return;
    }
    // Hook this up to your routing / websocket service to find an open room.
    console.log('Joining a room for', this.selectedGame.name);
    this.router.navigate(['join-room']);
  }

  createRoom(): void {
    if (!this.selectedGame) {
      return;
    }
    this.router.navigate(['create-room']);
    console.log('Creating a room for', this.selectedGame.name);
  }
}