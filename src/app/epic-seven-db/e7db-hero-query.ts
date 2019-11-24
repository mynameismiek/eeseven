import { E7dbHeroData } from './e7db-hero-data';

export interface E7dbHeroQuery {
  results: Array<E7dbHeroData>;
  meta: {
    requestDate: VarDate;
    apiVersion: string;
  }
}