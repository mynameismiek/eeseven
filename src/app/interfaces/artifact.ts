import { Stat } from './stat';

export interface Artifact {
  fileId: string;
  maxLevel: number;
  level: number;
  maxSkill: number;
  skill: number;
  limit: number;
  stats: Array<Stat>;
}