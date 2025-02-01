import { writable } from 'svelte/store'

import { type Wisp } from '$lib/types'


const SPAWN_DELAY = 1000;

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
  return {
    pos: {
      x: Math.random() * 100,
      y: Math.random() * 100,
    }
  }
}