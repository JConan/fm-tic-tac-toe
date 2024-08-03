<script lang="ts">
  import Cell from "$lib/components/game/Cell.svelte";
  import { boardStore, type Board } from "$stores/Board";

  $: board = $boardStore as Board;
</script>

<div role="grid">
  {#key board}
    {#each board.entries() as _, index}
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
