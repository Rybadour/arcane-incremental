import type { Rune } from "$lib/rune-types";
import { writable } from "svelte/store";

export const GRID_SLOTS: number[] = [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
];

export const runesInGrid = writable<Rune[]>([]);

export function addRune(rune: Rune) {
  runesInGrid.update((runes) => {
    runes.push(rune);
    return runes;
  })
}