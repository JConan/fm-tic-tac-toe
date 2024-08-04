<script lang="ts">
  import Cell from "$lib/components/game/Cell.svelte";
  import { boardStore, type Board } from "$stores/Board";
  import { gameSettingStore } from "$stores/GameSetting";
  import { tick } from "svelte";
  import { get } from "svelte/store";

  $: board = $boardStore as Board;

  $: {
    if ($gameSettingStore.playerTwo === "CPU") {
      tick().then(() => {
        if (
          !$board.endGame &&
          $board.nextPlayer !== $gameSettingStore.playerOne
        ) {
          const cells = Array.from(board).filter((cell) => get(cell) === " ");
          const randomIndex = Math.floor(Math.random() * cells.length);
          cells[randomIndex].set($board.nextPlayer);
        }
      });
    }
  }
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
