<script lang="ts">
    import "the-new-css-reset/css/reset.css";
    import "@fontsource-variable/outfit";
    import favico from "/assets/favicon-32x32.png";
    import Board from "$lib/Board.svelte";
</script>

<svelte:head>
    <title>Tic Tac Toe</title>
    <link rel="icon" type="image/png" href={favico} />
</svelte:head>

<Board />