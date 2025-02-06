<script lang="ts">
  import { onMount } from "svelte";

  import Portal from '../components/portal.svelte';
	import { onUpdate } from "../stores/portal";
	import Grid from "../components/runes.svelte";
	import Forge from "../components/forge.svelte";
	import { stats } from "../stores/global";

  onMount(() => {
    let frame = 0;
    let lastTime = 0;

    const loop = (time: number) => {
      onUpdate(time - lastTime);
      lastTime = time;

      frame = requestAnimationFrame(loop);
    };

    loop(0);

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<header class="mb-10 bg-slate-800 pb-3">
  <h1 class="text-center text-xl mb-4">Arcane Incremental</h1>

  <div class="flex justify-center gap-6">
    {#each Object.values($stats) as stat}
    <div class="flex gap-2 rounded-2xl bg-slate-500 p-2">
      <div class="text-slate-900">{stat.name}</div>
      <div class="text-slate-900 text-md font-bold">{stat.amount}</div>
    </div>
    {/each}
  </div>
</header>

<div class="grid grid-cols-3 gap-10 m-16">
  <Portal />
  <Grid />
  <Forge />
</div>


<style lang="postcss">
  :global(html) {
    @apply bg-slate-700 text-slate-100;
  }
</style>