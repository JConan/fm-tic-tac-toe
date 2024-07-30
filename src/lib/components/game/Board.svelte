<script lang="ts">
  import Cell from "$lib/components/game/Cell.svelte";
  import { boardStore } from "$stores/Board";
</script>

<div role="grid">
  {#key $boardStore}
    {#each $boardStore.entries() as _, index}
      <Cell {index} />
    {/each}
  {/key}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px;
  }
</style>
