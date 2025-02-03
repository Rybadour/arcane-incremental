import type { Stats, StatType } from "$lib/types";
import { writable } from "svelte/store";

export const stats = writable<Stats>({
  flame: {name: "Essence of Flame", amount: 0},
  water: {name: "Essence of Water", amount: 0},
  air: {name: "Essence of Air", amount: 0},
});

export function gainStat(id: StatType, amount: number) {
  stats.update(stats => {
    stats[id].amount += amount;
    return stats;
  })
}