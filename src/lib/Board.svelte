<script lang="ts">
    import { board } from "$stores/Board";
    import Cell from "./Cell.svelte";
    import ScoreBar from "./ScoreBar.svelte";
    const X_outline = `${import.meta.env.BASE_URL}assets/icon-x-outline.svg`;
    const O_outline = `${import.meta.env.BASE_URL}assets/icon-o-outline.svg`;

    $: line1 = $board.slice(0, 3);
    $: line2 = $board.slice(3, 6);
    $: line3 = $board.slice(6, 9);

    let nextPlayer: "X" | "O" = board.nextPlayer();

    const clickCell = (index: number) => () => {
        board.setCell(index, nextPlayer);
        nextPlayer = board.nextPlayer();
    };

    $: hoverImage = nextPlayer === "X" ? X_outline : O_outline;
</script>

<table style="--hover-image: url({hoverImage})">
    <tbody>
        <tr>
            {#each line1 as cellValue, index}
                <Cell on:click={clickCell(index)} {cellValue} />
            {/each}
        </tr>
        <tr>
            {#each line2 as cellValue, index}
                <Cell on:click={clickCell(index + 3)} {cellValue} />
            {/each}
        </tr>
        <tr>
            {#each line3 as cellValue, index}
                <Cell on:click={clickCell(index + 6)} {cellValue} />
            {/each}
        </tr>
    </tbody>
    <ScoreBar />
</table>

<style>
    table {
        border-collapse: separate;
        border-spacing: 20px;
    }
    tr {
        position: relative;
    }
</style>
