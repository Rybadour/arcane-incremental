import { writable } from "svelte/store";

import { ALL_RUNE_FLAVORS, NAME_PREFIXES, NAME_SUFFIXES, type Rune } from "$lib/rune-types";
import { getRandomFromArray, toUpperCamelCase } from "$lib/utils";

export const runes = writable<Rune[]>([]);

let lastRuneId = 0;
export function craftRune() {
  const flavor = getRandomFromArray(ALL_RUNE_FLAVORS);
  const newRune: Rune = {
    id: lastRuneId++,
    name: [getRandomFromArray(NAME_PREFIXES[flavor]), toUpperCamelCase(flavor), 'Rune', getRandomFromArray(NAME_SUFFIXES)].join(' '),
    type: 'rune',
    flavor,
    affixes: ['cast-speed']
  };

  runes.update(runes => {
    runes.push(newRune);
    return runes;
  })
}