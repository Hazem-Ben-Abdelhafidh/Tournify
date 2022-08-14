export interface Tournament {
  id: string;
  name: string;
  game: string;
  numberOfTeams: number;
  cost: number;
  userId: string;
  updatedAt: Date;
  createdAt: Date;
  startTime: Date;
}
export interface tournaments {
  tournaments: Tournament[];
}
