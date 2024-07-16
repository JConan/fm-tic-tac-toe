<script lang="ts">
  import Icon from "../base/Icon.svelte";
  import Button from "../base/Button.svelte";
  import { gameStore, selectCellAt } from "$stores/Game";

  export let index: number;
  let isMouseEntered = false;

  $: cellValue = $gameStore.cells[index];
  $: nextPlayer = $gameStore.nextPlayer;
  $: isEndGame = !!$gameStore.winner.player;
  $: isWinningCell = $gameStore.winner.cells?.includes(index);

  $: isHoverable = !isEndGame && cellValue === " ";
  $: color = (
    isWinningCell ? (cellValue === "X" ? "blue" : "yellow") : "dark"
  ) as "dark" | "blue" | "yellow";

  function onClick() {
    if (!isEndGame && cellValue === " ") selectCellAt(index);
  }
</script>

<td
  data-cell={cellValue}
  on:click={onClick}
  on:mouseenter={() => {
    isMouseEntered = isHoverable && !isEndGame;
  }}
  on:mouseleave={() => {
    isMouseEntered = false;
  }}
>
  <Button class="cell" width={140} height={140} {color} bind:isHoverable>
    {#if cellValue !== " "}
      <Icon
        name={cellValue}
        outlined={isWinningCell || (isHoverable && isMouseEntered)}
      />
    {:else if isMouseEntered}
      <Icon name={nextPlayer} outlined={isHoverable} />
    {/if}
  </Button>
</td>
