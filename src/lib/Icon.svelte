<script lang="ts">
  import { inlineSvg } from "@svelte-put/inline-svg";
  import { resolveIcon, type BaseColor, type Name } from "./Icon";
  export let name: Name;
  export let color: BaseColor | undefined = undefined;
  export let outlined: boolean = false;
  export let width: number = 64;
  export let height: number = 64;

  /**
   * Resolve asset and styling
   */
  $: ({ src, style, viewBox } = resolveIcon(name, outlined, color));
</script>

<svg class="icon" use:inlineSvg={src} {viewBox} {width} {height} {style} />

<style>
  svg {
    & path {
      stroke-width: var(--stroke-width, 0);
      stroke: var(--stroke-color);
      stroke-opacity: var(--stroke-opacity, 1);
      fill: var(--fill-color);
      fill-opacity: var(--fill-opacity, 1);
    }
  }
</style>
