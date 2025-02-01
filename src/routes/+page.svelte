<script lang="ts">
  import { onMount } from "svelte";

  import Portal from '../components/portal.svelte';
	import { onUpdate } from "../stores/portal";

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

<h1 class="text-center text-xl mb-10">Loot Generation Simulator</h1>

<Portal />


<style lang="postcss">
  :global(html) {
    margin: 30px;
    @apply bg-slate-700 text-slate-100;
  }
</style>