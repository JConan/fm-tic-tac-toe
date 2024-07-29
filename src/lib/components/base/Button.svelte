<script lang="ts">
  import { colorSchemes, type ButtonProps } from "./Button";

  interface $$Props extends ButtonProps {}

  export let color: $$Props["color"] = "yellow";
  export let width: $$Props["width"] = undefined;
  export let height: $$Props["height"] = undefined;
  export let isHoverable: $$Props["isHoverable"] = true;
  export let isHovering = false;

  let extraHeight = 0;

  let containerSize = `${width ? `width: ${width}px` : ""}; ${height ? `height: ${height}px` : ""}`;
  $: backgroundColor = `background-color: var(${colorSchemes[color!].background})`;
  $: buttonSize = `${width ? `width: ${width}px` : ""}; ${height ? `height: ${height}px` : ""}`;
  $: boxShadow = `box-shadow: 0px ${-4 - extraHeight}px 0px 0px var(${colorSchemes[color!].shadow}) inset`;
  $: top = `top: ${-extraHeight}px`;
  $: if (isHoverable === false) extraHeight = 0;

  const setExtraHeight = (value: number) => () => {
    if (extraHeight !== 0 || isHoverable) {
      extraHeight = value;
      isHovering = value !== 0;
    }
  };
</script>

<button
  {...$$restProps}
  style={`${containerSize}`}
  on:click
  on:mouseenter={setExtraHeight(4)}
  on:mouseleave={setExtraHeight(0)}
  on:focus={setExtraHeight(4)}
  on:blur={setExtraHeight(0)}
>
  <div style="{buttonSize};{backgroundColor};{boxShadow};{top}">
    <slot />
  </div>
</button>

<style>
  button {
    position: relative;
    width: 120px;
    height: 52px;

    & div {
      width: 100%;
      height: 100%;
      position: absolute;
      display: grid;
      place-items: center;
      transition: all 0.2s;
    }
  }

  button,
  button div {
    border-radius: 10px;
  }
</style>
