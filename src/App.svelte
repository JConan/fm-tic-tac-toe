<script lang="ts">
  import "the-new-css-reset/css/reset.css";
  import "@fontsource-variable/outfit";
  import favico from "/assets/favicon-32x32.png";
  import Board from "$lib/components/game/Board.svelte";

  window.addEventListener("message", (event) => {
    if (event.data === "getHeight") {
      const height = document.body.scrollHeight;
      event.source?.postMessage(
        { type: "getHeight", height },
        event.origin as any
      );
    }
  });
</script>

<svelte:head>
  <title>Tic Tac Toe</title>
  <link rel="icon" type="image/png" href={favico} />
</svelte:head>

<Board />
<!-- <StartMenu /> -->
