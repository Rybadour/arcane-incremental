import type { Rune } from "$lib/rune-types";
import { derived, writable } from "svelte/store";
import { generateExactRune } from "./runes";

export const GRID_WIDTH: number = 3;
export const GRID_HEIGHT: number = 3;

const INITIAL_GRID: (Rune | null)[][] = [];
for (let r = 0; r < GRID_HEIGHT; ++r) {
  const row: (Rune | null)[] = [];
  for (let c = 0; c < GRID_WIDTH; ++c) {
    if (r == 1 && c == 1) {
      row.push(generateExactRune({
        type: 'spell',
        flavor: 'water',
        name: 'Special Click spell',
        affixes: [],
      }));
    } else {
      row.push(null);
    }
  }
  INITIAL_GRID.push(row);
}

export const runesInGrid = writable<(Rune | null)[][]>(INITIAL_GRID);

export const numAirRunes = derived(runesInGrid, (grid) => {
  return grid.reduce((acc, row) => {
    return acc + row.reduce((acc, rune) => {
      return acc + (rune?.flavor === "air" ? 1 : 0);
    }, 0);
  }, 0);
})

export function placeRune(rune: Rune, row: number, column: number) {
  runesInGrid.update((runes) => {
    runes[row][column] = rune;
    return runes;
  })
}