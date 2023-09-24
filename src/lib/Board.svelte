<script lang="ts">
    import { board } from "$stores/Board";
    import Cell from "./Cell.svelte";

    $: line1 = $board.slice(0, 3);
    $: line2 = $board.slice(3, 6);
    $: line3 = $board.slice(6, 9);

    let nextPlayer = board.nextPlayer() as "X" | "O";

    const clickCell = (index: number) => () => {
        nextPlayer = board.nextPlayer();
        board.setCell(index, nextPlayer);
    };
</script>

<table>
    <tr>
        {#each line1 as cellValue, index}
            <Cell on:click={clickCell(index)} {cellValue} {nextPlayer} />
        {/each}
    </tr>
    <tr>
        {#each line2 as cellValue, index}
            <Cell on:click={clickCell(index + 3)} {cellValue} {nextPlayer} />
        {/each}
    </tr>
    <tr>
        {#each line3 as cellValue, index}
            <Cell on:click={clickCell(index + 6)} {cellValue} {nextPlayer} />
        {/each}
    </tr>
</table>
