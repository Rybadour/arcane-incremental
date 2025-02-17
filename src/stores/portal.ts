import { derived, writable } from 'svelte/store';

import { type StatType } from '$lib/types';
import { ALL_WISP_TYPES, type Wisp, type WispType } from '$lib/wisp-types';
import { gainStat } from './global';
import { getRandomFromArray } from '$lib/utils';
import { numAirRunes } from './grid';


const BASE_SPAWN_DELAY = 10000;
const SPAWN_DELAY_INCREASE = 1000;
const PORTAL_RADIUS = 200;
const SPAWN_RADIUS_MARGIN = 20;

export const wisps = writable<Wisp[]>([]);

export const spawnDelay = derived(numAirRunes, (numAirRunes) => {
  return BASE_SPAWN_DELAY - numAirRunes * SPAWN_DELAY_INCREASE;
});

export let lastSpawnTime = 0;

export function onUpdate(delta: number, spawnDelay: number) {
  if (lastSpawnTime <= 0) {
    wisps.update(w => {
      return [...w, generateWisp()];
    });

    lastSpawnTime = spawnDelay;
  } else {
    lastSpawnTime -= delta;
  }
}

function generateWisp(): Wisp {
  // Apparently this just fucking works!? https://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly
  const SPAWN_RADIUS = PORTAL_RADIUS - SPAWN_RADIUS_MARGIN;

  const rad = SPAWN_RADIUS * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;

  return {
    type: getRandomFromArray(ALL_WISP_TYPES),
    pos: {
      x: rad * Math.cos(theta),
      y: rad * Math.sin(theta)
    }
  };
}

export function killWisp(wisp: Wisp) {
  wisps.update(wisps => {
    return wisps.filter(w => w !== wisp);
  })
  gainStat(getWispKillStat(wisp.type), Math.ceil(Math.random() * 5));
}

function getWispKillStat(type: WispType): StatType {
  switch (type) {
    case 'flame':
      return 'flame';
    
    case 'water':
      return 'water';

    case 'air':
      return 'air';

    default:
      const exhaustiveCheck: never = type;
      return exhaustiveCheck;
  }
}