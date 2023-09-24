<script lang="ts">
    import X from "$assets/icon-x.svg";
    import X_outline from "$assets/icon-x-outline.svg";
    import O from "$assets/icon-o.svg";
    import O_outline from "$assets/icon-o-outline.svg";

    export let nextPlayer: string;
    export let cellValue: string;
</script>

<td on:click>{cellValue}</td>
