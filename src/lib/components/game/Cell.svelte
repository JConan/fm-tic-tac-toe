<script lang="ts">
  import "./Cell.css";
  import { boardStore, type createBoardStore } from "$stores/Board";
  import Button from "../base/Button.svelte";
  import Icon from "../base/Icon.svelte";

  let board = $boardStore;

  export let index: number;

  const cellStore = board[index];
  const onClick = () => {
    if (!$board.endGame) {
      board[index].set($board.nextPlayer);
    }
  };

  let isInteracting: boolean = false;
  const setInteracting = (state: boolean) => () => {
    isInteracting = canInteract ? state : false;
  };

  $: canInteract = $cellStore === " " && !$board.endGame;
  $: isWinningCell = $board.winner && $board.winner.cells.includes(index);
</script>

<Button
  role="cell"
  class="cell button-{$board.endGame && isWinningCell
    ? $cellStore === 'X'
      ? 'blue'
      : 'yellow'
    : 'semi-dark'}"
  tabindex={$cellStore === " " ? 0 : -1}
  on:click={onClick}
  on:mouseenter={setInteracting(true)}
  on:focus={setInteracting(true)}
  on:mouseleave={setInteracting(false)}
  on:blur={setInteracting(false)}
  disabled={!canInteract}
>
  {#if $cellStore !== " "}
    {#if isWinningCell}
      <Icon name={$cellStore} outlined />
    {:else}
      <Icon name={$cellStore} />
    {/if}
  {:else if isInteracting}
    <Icon name={$board.nextPlayer} outlined />
  {/if}
</Button>
