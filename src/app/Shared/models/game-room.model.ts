export interface GameRoom {
  id: string;
  name: string;
  gameType: string;
  maxPlayers: number;
  currentPlayers: number;
  isActive: boolean;
  createdAt: Date;
}
