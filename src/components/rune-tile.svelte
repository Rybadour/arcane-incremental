<script lang="ts">
	import type { Rune } from "$lib/rune-types";
  
  export let rune: Rune;
</script>

<div class="rounded-md bg-slate-500 w-[60px] h-[60px] flex justify-center items-center">
  {rune.flavor[0].toUpperCase()}
</div>