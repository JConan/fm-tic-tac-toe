<script lang="ts">
  import "the-new-css-reset/css/reset.css";
  import "@fontsource-variable/outfit";
  import favico from "/assets/favicon-32x32.png";
  import Board from "$lib/components/game/Board.svelte";
  import ControlBar from "$lib/components/ui/game/ControlBar.svelte";
  import ScoreBar from "$lib/components/ui/game/ScoreBar.svelte";
</script>

<svelte:head>
  <title>Tic Tac Toe</title>
  <link rel="icon" type="image/png" href={favico} />
</svelte:head>

<ControlBar />
<Board />
<ScoreBar />
