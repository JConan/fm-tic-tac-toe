<script lang="ts">
  import Button from "./Button.svelte";

  const X = `${import.meta.env.BASE_URL}assets/icon-x.svg`;
  const O = `${import.meta.env.BASE_URL}assets/icon-o.svg`;

  export let cellValue: string;
  export let hoverImage: string;
  let isMouseEntered = false;
  $: cellImage = cellValue === "X" ? X : O;
</script>

<td
  on:click
  on:mouseenter={() => {
    isMouseEntered = true;
  }}
  on:mouseleave={() => {
    isMouseEntered = false;
  }}
>
  <Button
    class="cell"
    width={140}
    height={140}
    color="dark"
    hoverable={cellValue === " "}
  >
    {#if cellValue !== " "}
      <img src={cellImage} alt={cellValue} />
    {:else if isMouseEntered}
      <img src={hoverImage} alt={cellValue} />
    {/if}
  </Button>
</td>
