<script lang="ts">
  import Icon from "./Icon.svelte";
  import Button from "./Button.svelte";

  export let cellValue: "X" | "O" | " ";
  export let nextPlayer: "X" | "O";
  export let isEndGame: boolean = false;
  export let isWinningCell: boolean = false;

  let isMouseEntered = false;
  $: isHoverable = !isEndGame && cellValue === " ";
  $: color = (
    isWinningCell ? (cellValue === "X" ? "blue" : "yellow") : "dark"
  ) as "dark" | "blue" | "yellow";
</script>

<td
  data-cell={cellValue}
  on:click
  on:mouseenter={() => {
    isMouseEntered = isHoverable && !isEndGame;
  }}
  on:mouseleave={() => {
    isMouseEntered = false;
  }}
>
  <Button class="cell" width={140} height={140} {color} bind:isHoverable>
    {#if cellValue !== " "}
      <Icon name={cellValue} outlined={isWinningCell || isMouseEntered} />
    {:else if isMouseEntered}
      <Icon name={nextPlayer} outlined={isHoverable} />
    {/if}
  </Button>
</td>
