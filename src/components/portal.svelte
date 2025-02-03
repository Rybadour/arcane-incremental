<script>
	import { getWispColor } from '$lib/types';
	import { killWisp, wisps } from '../stores/portal';
</script>

<div>
  <h2 class="text-xl text-center mb-4">Portal</h2>

  <svg width="600" height="600">
    <circle cx="200" cy="200" r="200" fill="#FFF" fill-opacity="0.2"></circle>
    <svg x="200" y="200" class="no-clip">
    {#each $wisps as wisp}
      <circle cx={wisp.pos.x} cy={wisp.pos.y} r="5" fill={getWispColor(wisp.type)} on:click={() => killWisp(wisp)} class="cursor-pointer"></circle>
    {/each}
    </svg>
  </svg>
</div>

<style>
  .no-clip {
    overflow: visible;
  }
</style>