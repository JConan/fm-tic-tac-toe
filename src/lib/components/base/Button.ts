import type { HTMLButtonAttributes } from "svelte/elements";

export interface ButtonProps extends HTMLButtonAttributes {
  color?: keyof typeof colorSchemes;
  width?: number;
  height?: number;
  isHoverable?: boolean;
  isHovering?: boolean;
}

export const colorSchemes = {
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
