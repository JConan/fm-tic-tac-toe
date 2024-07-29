<script lang="ts">
  import type { createBoardStore } from "$stores/Board";
  import Button from "../base/Button.svelte";
  import Icon from "../base/Icon.svelte";

  export let board: ReturnType<typeof createBoardStore>;
  export let index: number;

  const cellStore = board[index];
  const onClick = () => {
    if (!$board.endGame) {
      board[index].set($board.nextPlayer);
    }
  };

  let isHovering: boolean = false;
  $: isWinningCell = $board.winner && $board.winner.cells.includes(index);
  $: winner = $board.winner?.player;
</script>

<Button
  class="cell"
  role="cell"
  height={140}
  width={140}
  tabindex={$cellStore === " " ? 0 : -1}
  on:click={onClick}
  bind:isHovering
  color={isWinningCell ? (winner === "X" ? "blue" : "yellow") : "dark"}
  isHoverable={$cellStore === " " && !$board.endGame}
>
  {#if $cellStore !== " "}
    {#if isWinningCell}
      <Icon name={$cellStore} outlined />
    {:else}
      <Icon name={$cellStore} />
    {/if}
  {:else if isHovering}
    <Icon name={$board.nextPlayer} outlined />
  {/if}
</Button>

<style>
  :global(button.cell) {
  }
</style>
