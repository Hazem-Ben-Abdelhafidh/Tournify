import { Data } from "../Users/types";

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
  owner: Data;
}
export interface tournaments {
  tournaments: Tournament[];
}
