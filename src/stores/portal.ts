import { writable } from 'svelte/store'

import { ALL_WISP_TYPES, type StatType, type Wisp, type WispType } from '$lib/types'
import { gainStat } from './global';


const SPAWN_DELAY = 1000;
const PORTAL_RADIUS = 200;
const SPAWN_RADIUS_MARGIN = 20;

export const wisps = writable<Wisp[]>([]);

export let lastSpawnTime = 0;

export function onUpdate(delta: number) {
  if (lastSpawnTime <= 0) {
    wisps.update(w => {
      return [...w, generateWisp()];
    });

    lastSpawnTime = SPAWN_DELAY;
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
    type: ALL_WISP_TYPES[Math.floor(Math.random() * ALL_WISP_TYPES.length)],
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