// export type ChampionList = {
//   type: Type;
//   format: string;
//   version: Version;
//   data: { [key: string]: Champion };
// };

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

export type ChampionWithId = [string, Champion];
