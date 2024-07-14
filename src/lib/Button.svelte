<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$Props extends HTMLButtonAttributes {
    color?: keyof typeof colorSchemes;
    width?: number;
    height?: number;
    isHoverable?: boolean;
  }

  const colorSchemes = {
    blue: {
      background: "--light-blue",
      shadow: "--shadow-blue",
    },
    yellow: {
      background: "--light-yellow",
      shadow: "--shadow-yellow",
    },
    silver: {
      background: "--silver",
      shadow: "--shadow-silver",
    },
    "light-blue": {
      background: "--light-blue-hover",
      shadow: "--shadow-blue",
    },
    "light-yellow": {
      background: "--light-yellow-hover",
      shadow: "--shadow-yellow",
    },
    "light-silver": {
      background: "--silver-hover",
      shadow: "--shadow-silver",
    },
    dark: {
      background: "--semi-dark-navy",
      shadow: "--shadow-dark-navy",
    },
  };

  export let color: $$Props["color"] = "yellow";
  export let width: $$Props["width"] = 120;
  export let height: $$Props["height"] = 52;
  export let isHoverable: $$Props["isHoverable"] = true;

  let extraHeight = 0;

  let containerSize = `width: ${width}px; height: ${height}px`;
  $: backgroundColor = `background-color: var(${colorSchemes[color!].background})`;
  $: buttonSize = `width: ${width}px; height: ${height! + extraHeight}px`;
  $: boxShadow = `box-shadow: 0px ${-4 - extraHeight}px 0px 0px var(${colorSchemes[color!].shadow}) inset`;
  $: top = `top: ${-extraHeight}px`;

  const setExtraHeight = (value: number) => () => {
    if (extraHeight !== 0 || isHoverable) {
      extraHeight = value;
    }
  };
</script>

<button
  {...$$restProps}
  style={`${containerSize}`}
  on:click
  on:mouseenter={setExtraHeight(4)}
  on:mouseleave={setExtraHeight(0)}
>
  <div style="{buttonSize};{backgroundColor};{boxShadow};{top}">
    <slot />
  </div>
</button>

<style>
  button {
    position: relative;

    & div {
      position: absolute;
      display: grid;
      place-items: center;
      transition: all 0.1s;
    }
  }

  button,
  button div {
    border-radius: 10px;
  }
</style>
