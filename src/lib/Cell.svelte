<script lang="ts">
    const X = `${import.meta.env.BASE_URL}assets/icon-x.svg`;
    const O = `${import.meta.env.BASE_URL}assets/icon-o.svg`;

    export let cellValue: string;
    $: cellImage = cellValue === "X" ? X : O;
</script>

<td
    on:click
    class:checked={cellValue !== " "}
    style="--cell-image: url({cellImage})"
>
    {cellValue}
</td>

<style>
    td {
        font-size: 0;
        width: 140px;
        height: 140px;
        border-radius: 15px;
        background: var(--Semi-Dark-Navy, #1f3641);
        box-shadow: 0px -8px 0px 0px #10212a inset;

        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;
    }
    td.checked {
        background-image: var(--cell-image);
    }
    td:not(.checked):hover {
        background-image: var(--hover-image);
        position: absolute;
        height: 144px;
        top: -4px;
        box-shadow: 0px -12px 0px 0px #10212a inset;
    }
</style>
