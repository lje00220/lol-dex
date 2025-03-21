export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: object;
  tags: string[];
  partype: string;
  stats: { [key: string]: number };
};

export type Info = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: object;
  skins: object[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: Stat;
  stats: { [key: string]: number };
  spells: object[];
  passive: object;
  recommended: string[];
}

type Stat = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampionWithId = [string, Champion];
