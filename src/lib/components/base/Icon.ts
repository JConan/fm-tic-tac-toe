import type { Player } from "$stores/types";

export type BaseColor = "blue" | "yellow";
export type Color = BaseColor | `${BaseColor}_outlined`;
export interface ColorScheme {
  fillColor: string;
  fillOpacity?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
}

export type Name = Player;
export interface Asset {
  src: string;
  viewBox: string;
  defaultColor: BaseColor;
}

export const assets: Record<Name, Asset> = {
  X: {
    src: "assets/icon-x-outline.svg",
    viewBox: "0 0 65 65",
    defaultColor: "blue",
  },
  O: {
    src: "assets/icon-o-outline.svg",
    viewBox: "0 0 67 67",
    defaultColor: "yellow",
  },
};

export const colors: Record<Color, ColorScheme> = {
  blue: {
    fillColor: "var(--light-blue)",
  },
  blue_outlined: {
    fillColor: "var(--semi-dark-navy)",
    strokeColor: "var(--light-blue)",
    strokeWidth: 2,
  },
  yellow: {
    fillColor: "var(--light-yellow)",
  },
  yellow_outlined: {
    fillColor: "var(--dark-navy)",
    strokeColor: "var(--light-yellow)",
    strokeWidth: 2,
  },
};

export function resolveIcon(name: Name, outlined: boolean, color?: BaseColor) {
  const { src, viewBox, defaultColor } = assets[name];
  const selectedColor =
    colors[`${color ?? defaultColor}${outlined ? "_outlined" : ""}` as Color];
  let style: string = "";
  const { fillColor, strokeColor, strokeWidth, strokeOpacity, fillOpacity } =
    selectedColor;

  style = "";
  if (fillColor) style += `--fill-color: ${fillColor};`;
  if (fillOpacity) style += `--fill-opacity: ${fillOpacity};`;
  if (strokeColor) style += `--stroke-color: ${strokeColor};`;
  if (strokeOpacity) style += `--stroke-opacity: ${strokeOpacity};`;
  if (strokeWidth) style += `--stroke-width: ${strokeWidth};`;

  return { src, viewBox, style };
}
