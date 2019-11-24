export interface E7dbHeroData {
  _id: string;
  name: string;
  rarity: number;
  classType: string;
  element: string;
  zodiac: string;
  fileId: string;
  buffs: Array<string>;
  debuffs: Array<string>;
}