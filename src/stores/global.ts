import { writable } from "svelte/store";

import type { Stat } from "$lib/types";

export const stats = writable<Stat[]>([
  {name: "Essence of Flame", amount: 1245},
  {name: "Essence of Water", amount: 55203},
  {name: "Essence of Air", amount: 213},
]);