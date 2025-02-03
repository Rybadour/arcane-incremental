import { writable } from 'svelte/store'

import { type Wisp } from '$lib/types'


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
    pos: {
      x: rad * Math.cos(theta),
      y: rad * Math.sin(theta)
    }
  };
}