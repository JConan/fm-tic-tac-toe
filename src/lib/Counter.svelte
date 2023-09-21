<script lang="ts">
    let isHidden = false;
    function press() {
        isHidden = true;
    }
</script>

{#if !isHidden}
    <button on:click={press}>press me</button>
{/if}
