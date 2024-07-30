<script lang="ts">
  import "the-new-css-reset/css/reset.css";
  import "@fontsource-variable/outfit";
  import favico from "/assets/favicon-32x32.png";
  import Board from "$lib/components/game/Board.svelte";
  import { resetBoardStore } from "$stores/Board";
  import Button from "$lib/components/base/Button.svelte";
</script>

<svelte:head>
  <title>Tic Tac Toe</title>
  <link rel="icon" type="image/png" href={favico} />
</svelte:head>

<Button on:click={() => resetBoardStore()}>Reset</Button>

<Board />
