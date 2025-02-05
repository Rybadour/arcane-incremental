import type { Position } from "./types";

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