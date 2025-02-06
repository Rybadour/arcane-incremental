<script lang="ts">
  import {dndzone} from "svelte-dnd-action";
	import { GRID_SLOTS, runesInGrid } from "../stores/grid";
	import { runes } from "../stores/runes";
	import type { DndEvent } from "svelte-dnd-action";
	import type { Rune } from "$lib/rune-types";
	import GridTile from "./grid-tile.svelte";
	import RuneTile from "./rune-tile.svelte";

  function handleConsiderGrid(e: CustomEvent<DndEvent<Rune>>) {
    runesInGrid.set(e.detail.items);
  }

  function handleConsiderInventory(e: CustomEvent<DndEvent<Rune>>) {
    runes.set(e.detail.items);
  }

  function handleFinalizeInventory(e: CustomEvent<DndEvent<Rune>>) {
    runes.set(e.detail.items);
  }
</script>

<div>
  <h2 class="text-xl text-center mb-4">Rune Table</h2>

  <div class="grid grid-cols-4 gap-3 w-fit mx-auto">
    {#each GRID_SLOTS as slot}
    <GridTile />
    {/each}
  </div>

  <h2 class="text-xl text-center mb-4 mt-8">Rune Inventory</h2>

  <div
    class="grid grid-cols-4 gap-3 w-fit mx-auto min-w-[200px] min-h-[60px]"
    use:dndzone="{{items: $runes}}"
    on:consider={handleConsiderInventory}
    on:finalize={handleFinalizeInventory}
  >
    {#each $runes as rune(rune.id)}
    <RuneTile rune={rune} />
    {/each}
  </div>
</div>

<style>
</style>