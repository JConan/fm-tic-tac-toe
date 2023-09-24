<script lang="ts">
    import { board } from "$stores/Board";

    $: line1 = $board.slice(0, 3);
    $: line2 = $board.slice(3, 6);
    $: line3 = $board.slice(6, 9);

    const clickCell = (index: number) => () => {
        board.setCell(index, board.nextPlayer());
    };
</script>

<table>
    <tr>
        {#each line1 as cellValue, index}
            <td on:click={clickCell(index)}>{cellValue}</td>
        {/each}
    </tr>
    <tr>
        {#each line2 as cellValue, index}
            <td on:click={clickCell(index + 3)}>{cellValue}</td>
        {/each}
    </tr>
    <tr>
        {#each line3 as cellValue, index}
            <td on:click={clickCell(index + 6)}>{cellValue}</td>
        {/each}
    </tr>
</table>
