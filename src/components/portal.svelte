<script>
	import { wisps } from '../stores/portal';
</script>

<h2>Portal</h2>

<svg width="1000" height="1000">
  <circle cx="300" cy="300" r="200" fill="#FFF" fill-opacity="0.2"></circle>
  <svg x="300" y="300" class="no-clip">
  {#each $wisps as wisp}
    <circle cx={wisp.pos.x} cy={wisp.pos.y} r="5" fill="#D88"></circle>
  {/each}
  </svg>
</svg>

<style>
  .no-clip {
    overflow: visible;
  }
</style>