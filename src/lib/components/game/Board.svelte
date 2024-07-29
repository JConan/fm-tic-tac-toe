<script lang="ts">
  import Cell from "$lib/components/game/Cell.svelte";
  import { createBoardStore } from "$stores/Board";
  import Button from "../base/Button.svelte";

  export let board = createBoardStore();

  function reset() {
    board = createBoardStore();
  }
</script>

<Button color="yellow" on:click={reset}>Reset</Button>
<div role="grid">
  {#key board}
    {#each board.entries() as _, index}
      <Cell {board} {index} />
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
