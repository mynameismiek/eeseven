export interface E7dbArtifactData {
  _id: string;
  name: string;
  rarity: number;
  exclusive: Array<string>;
  fileId: string;
  loreDescription: Array<string>;
  skillDescription: Array<string>;
  buffs: Array<string>;
  debuffs: Array<string>;
  stats: E7dbStats;
}

export interface E7dbStats {
  base: E7dbStatList;
  max: E7dbStatList;
}

export interface E7dbStatList {
  atk: number;
  def: number;
  hp: number;  
  spd: number;  
  critR: number;  
  critD: number;  
  eff: number;  
  effR: number;  
  unity: number;  
}
