export type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[];
  image: object;
  gold: object;
  tags: string[];
  maps: { [key: string]: boolean };
  stats: { [key: string]: number };
  from?: string[];
  depth?: number;
  inStore?: boolean;
  effect?: object;
  consumed?: boolean;
  stacks?: number;
  hideFromAll?: boolean;
  consumeOnFull?: boolean;
  specialRecipe?: number;
  requiredChampion?: string;
};

export type ItemWithId = [string, Item];
