export interface Stat {
  name: string;
  amount: number;
}

export interface Stats {
  flame: Stat,
  water: Stat,
  air: Stat,
}

export type StatType = keyof Stats;

export interface Position {
  x: number;
  y: number;
}
