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

export type WispType = 'flame' | 'water' | 'air';

export const ALL_WISP_TYPES: WispType[] = ['flame', 'water', 'air'];

export interface Wisp {
  type: WispType;
  pos: Position;
}

export function getWispColor(type: WispType) {
  switch (type) {
    case 'flame':
      return '#D88';
    
    case 'water':
      return '#6488ba';

    case 'air':
      return '#DDD';

    default:
      const exhaustiveCheck: never = type;
      return exhaustiveCheck;
  }
}