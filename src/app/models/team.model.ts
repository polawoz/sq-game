import { Figure } from './figure.model';

export interface Team {
    id: number;
    members: Figure[];
    score: number;
  }