import { Stat } from './stat';

export interface Artifact {
  fileId: string;
  limit: number;
  maxEnhance: number;
  enhance: number;
  maxSkill: number;
  skill: number;  
  stats: Array<Stat>;
}