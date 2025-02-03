<script>
	import { GRID_SLOTS } from "../stores/grid";

</script>

<div>
  <h2 class="text-xl text-center mb-4">Rune Table</h2>

  <div class="grid grid-cols-4 gap-3 w-fit mx-auto">
    {#each GRID_SLOTS as slot}
      <div class="rounded-md border-2 border-white h-[60px] w-[60px]"></div>
    {/each}
  </div>
</div>

<style>
</style>