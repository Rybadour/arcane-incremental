<script lang="ts">
	import type { DndEvent, Item } from 'svelte-dnd-action';
	import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';

	import RuneTile from './rune-tile.svelte';
	import type { Rune } from '$lib/rune-types';
	
	let items: (Rune | Item)[] = [];
	
	function handleDrop(e: CustomEvent<DndEvent<Rune | Item>>) {
		items = e.detail.items;
	}
	
	$: options = {
		dropFromOthersDisabled: !!items.length,
		items,
		dropTargetStyle: {},
		flipDurationMs: 100
	};

  function isEmpty() {
    return items.find(tile => tile.hasOwnProperty(SHADOW_ITEM_MARKER_PROPERTY_NAME));
  }

  function isRune(thing: Rune | Item): thing is Rune {
    return (thing as Rune).type !== undefined && (thing as Rune).flavor !== undefined;
  }

</script>


<div
  class={"rounded-md bg-slate-600 w-[60px] h-[60px]" + (isEmpty() ? "bg-slate-700" : "")}
  use:dndzone={options}
  on:consider={handleDrop}
  on:finalize={handleDrop}
>
	{#each items as tile(tile.id)}
	  {#if isRune(tile)}
      <RuneTile rune={tile} />
    {/if}
	{/each}
</div>
